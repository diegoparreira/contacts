const orderItens = (a, b, key, orderType) => {

  if (key === "Admission Date") {
    key = "admissionDate";
    return orderType ? (new Date(a[key]) - new Date(b[key])) : (new Date(b[key]) - new Date(a[key]));
  }

  switch (key) {
    case "Name":
      key = "name";
      break;
    case "Country":
      key = "country";
      break;
    case "Company":
      key = "company";
      break;
    case "Department":
      key = "department";
      break;
    default:
      key = "name";
      break;
  }

  return orderType ? (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0) : (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0);

};

export default orderItens;
