import produce from 'immer';

const INITIAL_STATE = {
  newmeetup: [],
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/CREATE_MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.loading = false;
        draft.newmeetup = [];
        break;
      }
      case '@meetup/CREATE_MEETUP_FAILURE': {
        draft.loading = false;

        break;
      }
      default:
    }
  });
}
