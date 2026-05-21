export const mockPlans = [
  {
    userId: "user_001",
    name: "Beginner Strength Plan",
    isActive: true,

    workoutPlan: {
      schedule: ["Monday", "Wednesday", "Friday"],
      exercises: [
        {
          day: "Monday",
          routines: [
            {
              name: "Push Ups",
              sets: 3,
              reps: 12,
            },
            {
              name: "Bodyweight Squats",
              sets: 4,
              reps: 15,
            },
          ],
        },
        {
          day: "Wednesday",
          routines: [
            {
              name: "Pull Ups",
              sets: 3,
              reps: 8,
            },
            {
              name: "Lunges",
              sets: 3,
              reps: 12,
            },
          ],
        },
        {
          day: "Friday",
          routines: [
            {
              name: "Plank",
              sets: 3,
              reps: 1,
            },
            {
              name: "Burpees",
              sets: 3,
              reps: 10,
            },
          ],
        },
      ],
    },

    dietPlan: {
      dailyCalories: 2200,
      meals: [
        {
          name: "Breakfast",
          foods: ["Oatmeal", "Banana", "Eggs"],
        },
        {
          name: "Lunch",
          foods: ["Chicken Breast", "Rice", "Broccoli"],
        },
        {
          name: "Dinner",
          foods: ["Salmon", "Sweet Potato", "Salad"],
        },
      ],
    },
  },

  {
    userId: "user_002",
    name: "Fat Loss Program",
    isActive: false,

    workoutPlan: {
      schedule: ["Tuesday", "Thursday", "Saturday"],
      exercises: [
        {
          day: "Tuesday",
          routines: [
            {
              name: "Jump Rope",
              sets: 5,
              reps: 50,
            },
            {
              name: "Mountain Climbers",
              sets: 4,
              reps: 20,
            },
          ],
        },
        {
          day: "Thursday",
          routines: [
            {
              name: "Cycling",
              sets: 1,
              reps: 30,
            },
            {
              name: "Sit Ups",
              sets: 4,
              reps: 25,
            },
          ],
        },
        {
          day: "Saturday",
          routines: [
            {
              name: "Running",
              sets: 1,
              reps: 5,
            },
            {
              name: "Jump Squats",
              sets: 4,
              reps: 15,
            },
          ],
        },
      ],
    },

    dietPlan: {
      dailyCalories: 1800,
      meals: [
        {
          name: "Breakfast",
          foods: ["Greek Yogurt", "Strawberries", "Granola"],
        },
        {
          name: "Lunch",
          foods: ["Turkey Breast", "Quinoa", "Spinach"],
        },
        {
          name: "Dinner",
          foods: ["Grilled Fish", "Vegetables", "Brown Rice"],
        },
      ],
    },
  },

  {
    userId: "user_003",
    name: "Muscle Gain Advanced",
    isActive: true,

    workoutPlan: {
      schedule: ["Monday", "Tuesday", "Thursday", "Friday"],
      exercises: [
        {
          day: "Monday",
          routines: [
            {
              name: "Bench Press",
              sets: 5,
              reps: 8,
            },
            {
              name: "Incline Dumbbell Press",
              sets: 4,
              reps: 10,
            },
          ],
        },
        {
          day: "Tuesday",
          routines: [
            {
              name: "Deadlift",
              sets: 5,
              reps: 5,
            },
            {
              name: "Barbell Row",
              sets: 4,
              reps: 8,
            },
          ],
        },
        {
          day: "Thursday",
          routines: [
            {
              name: "Squats",
              sets: 5,
              reps: 8,
            },
            {
              name: "Leg Press",
              sets: 4,
              reps: 12,
            },
          ],
        },
        {
          day: "Friday",
          routines: [
            {
              name: "Shoulder Press",
              sets: 4,
              reps: 10,
            },
            {
              name: "Bicep Curls",
              sets: 4,
              reps: 12,
            },
          ],
        },
      ],
    },

    dietPlan: {
      dailyCalories: 3200,
      meals: [
        {
          name: "Breakfast",
          foods: ["Eggs", "Toast", "Protein Shake"],
        },
        {
          name: "Lunch",
          foods: ["Steak", "Rice", "Beans"],
        },
        {
          name: "Dinner",
          foods: ["Chicken Pasta", "Vegetables", "Avocado"],
        },
      ],
    },
  },
];
