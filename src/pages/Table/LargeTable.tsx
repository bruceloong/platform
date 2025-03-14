import React, { useState, useEffect, useRef } from "react";
import { Table, Card, Input, Button, Space, Spin } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import { VariableSizeGrid as Grid } from "react-window";
import ResizeObserver from "rc-resize-observer";
import { tableApi } from "../../services";
import { TableItem } from "../../types";

// 虚拟滚动表格组件
const VirtualTable = (props: Parameters<typeof Table>[0]) => {
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const widthColumnCount = columns!.filter(({ width }) => !width).length;
  const mergedColumns = columns!.map((column) => {
    if (column.width) {
      return column;
    }

    return {
      ...column,
      width: Math.floor(tableWidth / widthColumnCount),
    };
  });

  const gridRef = useRef<any>(null);
  const [connectObject] = useState<any>(() => {
    const obj = {};
    Object.defineProperty(obj, "scrollLeft", {
      get: () => {
        if (gridRef.current) {
          return gridRef.current?.state?.scrollLeft;
        }
        return null;
      },
      set: (scrollLeft: number) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({ scrollLeft });
        }
      },
    });

    return obj;
  });

  const resetVirtualGrid = () => {
    gridRef.current?.resetAfterIndices({
      columnIndex: 0,
      rowIndex: 0,
      shouldForceUpdate: true,
    });
  };

  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (
    rawData: object[],
    { scrollbarSize, ref, onScroll }: any
  ) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;

    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={(index: number) => {
          const { width } = mergedColumns[index];
          return totalHeight > scroll.y && index === mergedColumns.length - 1
            ? (width as number) - scrollbarSize - 1
            : (width as number);
        }}
        height={scroll.y as number}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }: { scrollLeft: number }) => {
          onScroll({ scrollLeft });
        }}
      >
        {({
          columnIndex,
          rowIndex,
          style,
        }: {
          columnIndex: number;
          rowIndex: number;
          style: React.CSSProperties;
        }) => (
          <div
            className={`virtual-table-cell ${
              columnIndex === mergedColumns.length - 1
                ? "virtual-table-cell-last"
                : ""
            }`}
            style={style}
          >
            {
              (rawData[rowIndex] as any)[
                (mergedColumns[columnIndex] as any).dataIndex
              ]
            }
          </div>
        )}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width);
      }}
    >
      <Table
        {...props}
        className="virtual-table"
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  );
};

// 大数据表格页面
const LargeTable: React.FC = () => {
  const [data, setData] = useState<TableItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState<TableItem[]>([]);

  // 定义表格列
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      width: 120,
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      width: 80,
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
      width: 200,
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "电话",
      dataIndex: "phone",
      key: "phone",
      width: 150,
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 180,
    },
    {
      title: "更新时间",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 180,
    },
  ];

  // 获取表格数据
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await tableApi.getLargeData({ current: 1, pageSize: 100000 });
      if (res.success) {
        setData(res.data.list);
        setFilteredData(res.data.list);
      }
    } catch (error) {
      console.error("获取表格数据失败:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 搜索处理
  const handleSearch = () => {
    if (!searchText) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.address.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filtered);
  };

  // 重置搜索
  const handleReset = () => {
    setSearchText("");
    setFilteredData(data);
  };

  // 刷新数据
  const handleRefresh = () => {
    fetchData();
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <Spin size="large" tip="加载中..." />
      </div>
    );
  }

  return (
    <div>
      <Card
        title="大数据表格 (10万行)"
        extra={
          <Button icon={<ReloadOutlined />} onClick={handleRefresh}>
            刷新
          </Button>
        }
      >
        <div style={{ marginBottom: 16 }}>
          <Space>
            <Input
              placeholder="搜索姓名、地址或邮箱"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={handleSearch}
              style={{ width: 300 }}
            />
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={handleSearch}
            >
              搜索
            </Button>
            <Button onClick={handleReset}>重置</Button>
          </Space>
        </div>

        <div style={{ marginBottom: 16 }}>
          <span>共 {filteredData.length} 条数据</span>
        </div>

        <VirtualTable
          columns={columns}
          dataSource={filteredData}
          scroll={{ y: 500, x: "100vw" }}
          rowKey="id"
        />
      </Card>
    </div>
  );
};

export default LargeTable;
