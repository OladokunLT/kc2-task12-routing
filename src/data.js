let dataplans = [
  {
    id: 1,
    value: "100",
    size: "10MB",
    validity: "1 day",
  },
  {
    id: 2,
    value: "200",
    size: "500MB",
    validity: "1 day",
  },
  {
    id: 3,
    value: "500",
    size: "750MB",
    validity: "1 week",
  },
  {
    id: 4,
    value: "1,000",
    size: "1GB",
    validity: "1 month",
  },
  {
    id: 5,
    value: "2,000",
    size: "5GB",
    validity: "1 month",
  },
  { id: 6, value: "5,000", size: "10GB", validity: "1 month" },
  {
    id: 7,
    value: "10,000",
    size: "22GB",
    validity: "1 month",
  },
];

export function getDataplans() {
  return dataplans;
}

export function getDataplan(id) {
  return dataplans.find((dataplan) => dataplan.id === id);
}
