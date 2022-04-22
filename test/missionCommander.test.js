const MissionCommander = require('./../app/missionCommander');

describe("Unit Test for Mission Commander Class", () => {
    test('1) Create a mission commander object', () => {
      const MyMissionCommander = new MissionCommander("hisahito");
      expect(MyMissionCommander.name).toBe("hisahito");
    });
  })


  