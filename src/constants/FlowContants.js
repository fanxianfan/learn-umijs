
/**流程类型*/
export const FlowTypes = [
  {key: 0, desc: '销售类'},
  {key: 1, desc: '理赔类'},
  {key: 2, desc: '服务类'},
  {key: 3, desc: '招标类'},
];

/**流程状态*/
export const FlowStates = [
  {key: 0, desc: '未发布'},
  {key: 1, desc: '已发布'}
];


export const GroupTree = [
  {
    key: '0',
    title: '总公司',
  },
  {
    key: '0-0',
    title: '浙江省',
    children: [
      { key: '0-0-1', title: '杭州分公司' },
      { key: '0-0-2', title: '绍兴分公司' },
      { key: '0-0-3', title: '台州分公司' },
      { key: '0-0-4', title: '宁波分公司' },
      { key: '0-0-5', title: '丽水分公司' },
    ],
  },
  {
    key: '0-1',
    title: '广东省',
    children: [
      { key: '0-1-1', title: '广州分公司' },
      { key: '0-1-2', title: '东莞分公司' },
      { key: '0-1-3', title: '珠海分公司' },
      { key: '0-1-4', title: '佛山分公司' },
      { key: '0-1-5', title: '韶关分公司' },
    ],
  },
  {
    key: '0-2',
    title: '福建省',
    children: [
      { key: '0-2-1', title: '福州分公司' },
      { key: '0-2-2', title: '莆田分公司' },
      { key: '0-2-3', title: '泉州分公司' },
      { key: '0-2-4', title: '龙岩分公司' },
      { key: '0-2-5', title: '南平分公司' },
    ],
  },
  {
    key: '0-3',
    title: '广西省',
    children: [
      { key: '0-2-1', title: '福州分公司' },
      { key: '0-2-2', title: '莆田分公司' },
      { key: '0-2-3', title: '泉州分公司' },
      { key: '0-2-4', title: '龙岩分公司' },
      { key: '0-2-5', title: '南平分公司' },
    ],
  },
  {
    key: '0-4',
    title: '江西省',
    children: [
      { key: '0-4-1', title: '南昌分公司' },
      { key: '0-4-2', title: '上饶分公司' },
      { key: '0-4-3', title: '景德镇分公司' },
      { key: '0-4-4', title: '九江分公司' },
      { key: '0-4-5', title: '赣州分公司' },
    ],
  },
  {
    key: '0-5',
    title: '云南省',
    children: [
      { key: '0-5-1', title: '昆明分公司' },
      { key: '0-5-2', title: '玉溪分公司' },
      { key: '0-5-3', title: '丽江分公司' },
      { key: '0-5-4', title: '普洱分公司' },
      { key: '0-5-5', title: '曲靖分公司' },
    ],
  },
  {
    key: '0-6',
    title: '海南省',
    children: [
      { key: '0-6-1', title: '海口分公司' },
      { key: '0-6-2', title: '三亚分公司' },
      { key: '0-6-3', title: '三沙分公司' },
    ],
  },
];
