const updateSelectedCompanies = (selectedCompanies: string[], companyId: string) => {
  let newSelectedCompanies = [...selectedCompanies];

  if (newSelectedCompanies.includes(companyId)) {
    newSelectedCompanies = newSelectedCompanies.filter((id) => id !== companyId);
  } else {
    console.log(newSelectedCompanies, companyId);
    newSelectedCompanies.push(companyId);
  }
  return newSelectedCompanies;
}

export { updateSelectedCompanies }