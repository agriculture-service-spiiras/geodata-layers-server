const { RESTDataSource } = require("apollo-datasource-rest");
const config = require("config");

const mockVehicle = {
  id: "1_aerial_vehicle",
  tasks: [
    {
      id: "1_task",
      name: "Снимки территории",
    },
  ],
};

let mockVehiclesList = [
  {
    id: "1_aerial_vehicle",
    tasks: [
      {
        id: "1_task",
        name: "Снимки территории",
        steps: [
          {
            id: "1_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "2_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "3_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
        ],
      },
      {
        id: "2_task",
        name: "Снимки территории",
        steps: [
          {
            id: "1_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "2_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "3_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
        ],
      },
      {
        id: "3_task",
        name: "Снимки территории",
        steps: [
          {
            id: "1_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "2_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "3_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
        ],
      },
      {
        id: "4_task",
        name: "Снимки территории",
        steps: [
          {
            id: "1_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "2_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "3_step_point",
            stopTime: "15'00",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
        ],
      },
    ],
  },
  {
    id: "2_aerial_vehicle",
    tasks: [
      {
        id: "2_task",
        name: "Облететь поле",
        steps: [
          {
            id: "4_step_point",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "5_step_point",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
          {
            id: "6_step_point",
            coordinates: {
              lng: 30.42388,
              lat: 60.25855,
            },
          },
        ],
      },
      // {
      //   id: "3_task",
      //   name: "Посев",
      //   steps: [
      //     {
      //       id: "7_step_point",
      //       stopTime: "36'38",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "8_step_point",
      //       stopTime: "24'13",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "9_step_point",
      //       stopTime: "25'58",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "10_step_point",
      //       stopTime: "30'00",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //   ],
      // },
      // {
      //   id: "4_task",
      //   name: "Посев",
      //   steps: [
      //     {
      //       id: "7_step_point",
      //       stopTime: "36'38",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "8_step_point",
      //       stopTime: "24'13",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "9_step_point",
      //       stopTime: "25'58",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "10_step_point",
      //       stopTime: "30'00",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //   ],
      // },
      // {
      //   id: "5_task",
      //   name: "Посев",
      //   steps: [
      //     {
      //       id: "7_step_point",
      //       stopTime: "36'38",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "8_step_point",
      //       stopTime: "24'13",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "9_step_point",
      //       stopTime: "25'58",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "10_step_point",
      //       stopTime: "30'00",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //   ],
      // },
      // {
      //   id: "6_task",
      //   name: "Посев",
      //   steps: [
      //     {
      //       id: "7_step_point",
      //       stopTime: "36'38",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "8_step_point",
      //       stopTime: "24'13",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "9_step_point",
      //       stopTime: "25'58",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //     {
      //       id: "10_step_point",
      //       stopTime: "30'00",
      //       coordinates: {
      //         lng: 30.42388,
      //         lat: 60.25855,
      //       },
      //     },
      //   ],
      // },
    ],
  },
];

const mockLayerScheme = "mock_vehicle-scheme";

const mockResultAddTask = mockVehicle;

const mockResultChangeTask = mockVehicle;

class VehiclesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.routes.vehicles;
  }

  async getVehicle(id) {
    const gettingVehicle = mockVehiclesList.find(
      ({ id: stored }) => stored === id
    );

    return gettingVehicle;
  }

  async getVehicles() {
    const gettingVehicles = mockVehiclesList;

    return gettingVehicles;
  }

  async getLayerScheme() {
    const gettingScheme = mockLayerScheme;

    return gettingScheme;
  }

  async addVehicleTask(vehicle, task) {
    const addingResult = mockResultAddTask;

    return addingResult;
  }

  async cancelVehicleTask(vehicle, canceled) {
    const updatedVehicle = mockVehiclesList.find(({ id }) => id === vehicle);

    if (updatedVehicle) {
      updatedVehicle.tasks = updatedVehicle.tasks.filter(
        ({ id: active }) => active !== canceled
      );
    }

    return updatedVehicle.tasks;
  }
}

module.exports = VehiclesAPI;
