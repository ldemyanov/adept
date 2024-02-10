import { useDispatch } from "react-redux";
import Modal from "../../modal/Modal";
import { Company, addCompany } from "../../../store/company/company.slice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type CompanyFormProps = {
  isFormOpen: boolean;
  closeForm: () => void;
};

const CompanyForm: React.FC<CompanyFormProps> = ({ isFormOpen, closeForm }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const onHandleModalAccept = () => {
    if (!name.length || !address.length) return;

    const company: Company = {
      id: uuidv4(),
      name,
      address,
      employeeCount: 0,
    };

    dispatch(addCompany(company));
    closeForm();
  };

  const onHandleModalClose = () => closeForm();

  return (
    isFormOpen && (
      <Modal
        content={
          <>
            <label>
              Название
              <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
              Адрес
              <input type="text" name="address" value={address} onChange={(event) => setAddress(event.target.value)} />
            </label>
          </>
        }
        acceptBtn={{ onClick: onHandleModalAccept }}
        closeBtn={{ onClick: onHandleModalClose }}
      />
    )
  );
};

export default CompanyForm;
