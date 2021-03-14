const INITIAL_STATE = {
  articles: [
    { id: '0', title: 'How to fetch data in React'},
    { id: '1', title: 'React\'s Ecosystem as a flexible Framework'},
    { id: '2', title: 'What\'s new in React 16?'},
    { id: '3', title: '8 things to learn in React before using Redux'},
    { id: '4', title: 'Accept Stripe Payments with React and Express'},
    { id: '5', title: 'Tips to learn React + Redux' },
    { id: '6', title: '10 Reasons why I moved from Angular to React' },
    { id: '7', title: 'All the Conditional Renderings in React' },
    { id: '8', title: 'Redux or MobX: An attempt to dissolve the Confusion' },
    { id: '9', title: 'Tips to learn React + Redux' },
    { id: '10', title: 'A gentle Introduction to React\'s Higher Order Components' },
    { id: '11', title: 'Complete Course to learn Redux and MobX' },
  ],
};

function articleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}

export default articleReducer;
