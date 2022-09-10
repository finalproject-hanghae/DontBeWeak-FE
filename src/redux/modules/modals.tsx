import { modals } from "../../types/modals";

//action
const FRIEND = "switch/FRIEND" as const;
const SEARCH = "switch/SEARCH" as const;
const DIRECT = "switch/DIRECT" as const;
const CATSHOP = "switch/CATSHOP" as const;
const SHOPNOTICE = "switch/SHOPNOTICE" as const;
const SHOPCONFIRM = "switch/SHOPCONFIRM" as const;
const FEEDBACK = "switch/FEEDBACK" as const;

//initialState
type ModalState = {
  modals: modals;
};

const initialState: ModalState = {
  modals: {
    friendListModal: false,
    searchDrugModal: false,
    directSearchModal: false,
    catShopModal: false,
    shopNoticeModal: false,
    shopConfirmModal: false,
    feedbackModal: false,
  },
};

//Action Function
export const switchFriendModal = (foo: boolean) => {
  return { type: FRIEND, switch: foo };
};

export const switchSearchModal = (foo: boolean) => {
  return { type: SEARCH, switch: foo };
};

export const switchDirectModal = (foo: boolean) => {
  return { type: DIRECT, switch: foo };
};

export const switchCatShopModal = (foo: boolean) => {
  return { type: CATSHOP, switch: foo };
};

export const switchShopNoticeModal = (foo: boolean) => {
  return { type: SHOPNOTICE, switch: foo };
};

export const switchShopConfirmModal = (foo: boolean) => {
    return { type: SHOPCONFIRM, switch: foo };
  };

export const switchFeedbackModal = (foo: boolean) => {
  return { type: FEEDBACK, switch: foo };
};

//Reducer
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "switch/FRIEND": {
      return { modals: { ...state.modals, friendListModal: action.switch } };
    }
    case "switch/SEARCH": {
      return { modals: { ...state.modals, searchDrugModal: action.switch } }
    }
    case "switch/DIRECT": {
      return { modals: { ...state.modals, directSearchModal: action.switch } }
    }
    case "switch/CATSHOP": {
      return { modals: { ...state.modals, catShopModal: action.switch } }
    }
    case "switch/SHOPNOTICE": {
      return { modals: { ...state.modals, shopNoticeModal: action.switch } }
    }
    case "switch/SHOPCONFIRM": {
        return { modals: { ...state.modals, shopConfirmModal: action.switch } }
      }
    case "switch/FEEDBACK": {
      return { modals: { ...state.modals, feedbackModal: action.switch } }
    }
    // do reducer stuff
    default:
      return state;
  }
}
