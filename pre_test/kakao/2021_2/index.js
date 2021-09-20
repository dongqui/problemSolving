const _axios = require('axios');
const BASE_URL = 'https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users';
const axios = _axios.create({
  baseURL: BASE_URL,
});

async function start() {
  const headers = {
    "X-Auth-Token": '4f745093be217f9c1549280fb27cbc6f',
  };
  const start = await axios.post('/start', { problem: 1 }, { headers });
  const { auth_key } = start.data;

  axios.defaults.headers.common['Authorization'] = auth_key;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
}

async function getLocations() {
  return await axios.get('/locations');
}

async function getTrucks() {
  return await axios.get('/trucks');
}

async function simulate(commands) {
  return await axios.put('/simulate', {
    commands,
  });
}

async function score() {
  console.log((await axios.get('/score')).data);
}

async function action() {
  const locations =  (await getLocations()).data.locations;
  const trucks = (await getTrucks()).data.trucks;
  const simulations = [];
  for (const location of locations) {
    if (!needsMoreBike(location)) {
      continue;
    }
    let minimumCommands = [];
    let truckId = null;
    const visit = [];
    for (const truck of trucks) {
      if (visit.includes(truck.location_id)) {
        continue;
      }
      visit.push(truck.location_id);
      const commands = bfs(truck.location_id, location.id, locations, 2);
      console.log(commands)
      if ((minimumCommands.length || Infinity) > commands.length) {
        minimumCommands = commands;
        truckId = truck.id;
        simulations.push({ truck_id: truckId, command: commands })
      }
    }
    moveTruck(truckId, minimumCommands, locations, trucks)
  }
  return simulations;
}

async function p_1() {
  await start();
  while (true) {
    const simulations = await action();
    const ret = await simulate(simulations);
    // if (ret.data.status === 'finished') {
    //   await score();
    //   break;
    // }
  }
}

p_1();

function getLocation(id, locations) {
  return locations.find(l => l.id === id);
}

function moveTruck(truckId, commands, locations, trucks) {
  const truck = trucks.find(t => t.id === truckId);
  let locationId = truck.location_id;
  for (const c of commands) {
    if (c === 1) {
      locationId += 1;
    } else if (c === 2) {
      locationId += 5;
    } else if (c === 3) {
      locationId -= 1;
    } else if (c === 4) {
      locationId -= 5;
    } else if (c === 5) {
      const location = locations.find(l => l.id === locationId);
      location.located_bikes_count -= 1;
      truck.loaded_bikes_count += 1;
    } else if (c === 6) {
      const location = locations.find(l => l.id === locationId);
      location.located_bikes_count += 1;
      truck.loaded_bikes_count -= 1;
    }
  }
}

function needsMoreBike(location, minimum=2) {
    return location.located_bikes_count < minimum;
}

function bfs(start, end, locations, minimum=2) {
  const queue = [{
    position: start,
    bike: 0,
    move: 0,
    visit: [start],
    commands: []
  }];
  let minimumCommands = [];
  while (queue.length) {
    const { position, bike, visit, move, commands } = queue.pop();
    let needs = minimum - getLocation(end, locations).located_bikes_count - bike;
    const minimumMoveCounts = minimumCommands.length || Infinity;
    if (minimumMoveCounts < move + 1 || commands.length >= 10) {
      continue;
    }
    if (position === end) {
      if (needs === bike && move < minimumMoveCounts) {
        minimumCommands = commands;
      }
      continue;
    }

    if (position + 1 <= 24 && (position + 1) % 5 > position % 5 && !visit.includes(position + 1)) {
      const locatedBikes = getLocation(position + 1, locations).located_bikes_count;
      const extra = locatedBikes - minimum;
      const giving = extra > needs ? needs : (needs - extra)
      queue.push({
        position: position + 1,
        bike: bike + giving,
        move: move + 1,
        visit: [...visit, start],
        commands: [...commands, 1, ...new Array(giving > 0 ? giving : 0).fill(5)]
      })
    }

    if (position + 5 < 25 && !visit.includes(position + 5)) {
      const locatedBikes = getLocation(position + 5, locations).located_bikes_count;
      const extra = locatedBikes - minimum;
      const giving = extra > needs ? needs : needs - extra
      queue.push({
        position: position + 5,
        bike: bike + giving,
        move: move + 1,
        visit: [...visit, start],
        commands: [...commands, 2, ...new Array(giving > 0 ? giving : 0).fill(5)]
      })
    }

    if (position - 1 >= 0 && (position - 1) % 5 < position % 5 && !visit.includes(position - 1)) {
      const locatedBikes = getLocation(position - 1, locations).located_bikes_count;
      const extra = locatedBikes - minimum;
      const giving = extra > needs ? needs : needs - extra
      queue.push({
        position: position - 1,
        bike: bike + giving,
        move: move + 1,
        visit: [...visit, start],
        commands: [...commands, 3, ...new Array(giving > 0 ? giving : 0).fill(5)]
      })
    }

    if (position - 5 >= 0 && !visit.includes(position - 5)) {
      const locatedBikes = getLocation(position - 5, locations).located_bikes_count;
      const extra = locatedBikes - minimum;
      const giving = extra > needs ? needs : needs - extra
      queue.push({
        position: position - 5,
        bike: bike + giving,
        move: move + 1,
        visit: [...visit, start],
        commands: [...commands, 4, ...new Array(giving > 0 ? giving : 0).fill(5)]
      })
    }
  }

  return minimumCommands;
}


