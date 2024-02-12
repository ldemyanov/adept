import { useDispatch } from "react-redux";
import Modal from "../../ui/Modal/Modal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Employee, addEmployee } from "../../../store/employee/employee.slice";
import { useAppSelector } from "../../../store";
import { changeEmployeeCount } from "../../../store/company/company.slice";

type EmployeeFormProps = {
  isFormOpen: boolean;
  closeForm: () => void;
};

const EmployeeForm: React.FC<EmployeeFormProps> = ({ isFormOpen, closeForm }) => {
  const dispatch = useDispatch();

  const companyId = useAppSelector((state) => state.company.selectedCompanies);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const onHandleModalAccept = () => {
    if (!firstName.length || !lastName.length || !position.length || !companyId.length) return;

    const employee: Employee = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      position: position,
      companyId: companyId[0],
    };

    dispatch(addEmployee(employee));
    dispatch(changeEmployeeCount({ id: companyId[0], increment: 1 }));
    closeForm();
  };

  const onHandleModalClose = () => closeForm();

  return (
    isFormOpen && (
      <Modal
        content={
          <>
            <label>
              Имя
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </label>
            <label>
              Фамилия
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </label>
            <label>
              Должность
              <input
                type="text"
                name="position"
                value={position}
                onChange={(event) => setPosition(event.target.value)}
              />
            </label>
          </>
        }
        acceptBtn={{ onClick: onHandleModalAccept }}
        closeBtn={{ onClick: onHandleModalClose }}
      />
    )
  );
};

export default EmployeeForm;
