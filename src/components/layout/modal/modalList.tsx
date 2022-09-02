import LogInForm from "./modalforms/LogInForm";
import ModalComponent from "./ModalComponent";
import NotFoundForm from "./modalforms/NotFoundForm";
import SearchDrugForm from "../buttonpop/buttonpopforms/SearchDrugForm";
import SignUpForm from "./modalforms/SignUpForm";

const List = ["LogIn", "SignUp", "NotFound", "Search"];

export const FORM = {
  LogIn: <LogInForm />,
  SignUp: <SignUpForm />,
  NotFound: <NotFoundForm />,
  Search: <SearchDrugForm />,
};
export const PATH = {
  LogIn: "/",
  SignUp: "/",
  NotFound: "/",
  Search: "/record",
};

export var Modals = {
  LogIn: <ModalComponent to={PATH.LogIn}>{FORM.LogIn}</ModalComponent>,
  SignUp: <ModalComponent to={PATH.SignUp}>{FORM.SignUp}</ModalComponent>,
  NotFound: <ModalComponent to={PATH.NotFound}>{FORM.NotFound}</ModalComponent>,
  Search: <ModalComponent to={PATH.Search}>{FORM.Search}</ModalComponent>,
};

// for (var x in List) {
//     Modals.assign({x: <Modal to={PATH.x}>{FORM.x}</Modal>})
// }

export default Modals;
