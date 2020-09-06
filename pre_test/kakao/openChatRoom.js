function solution(records) {
  const actions = {
    Enter: '들어왔습니다.',
    Leave: '나갔습니다.'
  }
  const users = records.reduce((usersDict, record) => {
    const [ action, uid, username ] = record.split(' ');
    if (action === 'Enter' || action === 'Change') usersDict[uid] = username;
    return usersDict;
  }, {});

  return records
    .map(record => record.split(' '))
    .filter(([action]) => action !== 'Change')
    .map(([action, uid]) => `${users[uid]}님이 ${actions[action]}`)
}
