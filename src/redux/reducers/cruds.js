import { formTypes } from "../../constants/form"

const initialState = {
  data: [
    {
      path: '/tags',
      title: 'Tags',
      icon: 'tag',
      fields: [
        { name: 'name', label: 'Name', type: formTypes.INPUT },
      ],
    },
    {
      path: '/posts',
      title: 'Posts',
      icon: 'document',
    },
    {
      path: '/users',
      title: 'Users',
      icon: 'people',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
