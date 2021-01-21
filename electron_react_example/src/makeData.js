import namor from 'namor';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    ProcNum: Math.floor(Math.random() * 1000),
    ProcRunState: Math.floor(Math.random() * 10),
    ClientCount: Math.floor(Math.random() * 10),
    LinkStatus: Math.floor(Math.random() * 10),
    ServerType: Math.floor(Math.random() * 10),
    T: Math.floor(Math.random() * 10),
    F: Math.floor(Math.random() * 10),
    SeqNum: Math.floor(Math.random() * 10),
    StoreQsent: Math.floor(Math.random() * 10),
    StoreQwillsend: Math.floor(Math.random() * 10),
    MemQsent: Math.floor(Math.random() * 10),
    MemQwillsend: Math.floor(Math.random() * 10),
    ResponseTime: Math.floor(Math.random() * 1000000),
    LogLevels: Math.floor(Math.random() * 10),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
