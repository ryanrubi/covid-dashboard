import DataTable from "react-data-table-component";

const CountriesDataTable = (props) => {

  const data = [];

  if(props.data !== 0) {
    Object.keys(props.data.countries).forEach( i => {
      data.push(props.data.countries[i]);
    });
  }

  const columns = [
    {
      id: 1,
      name: "Country",
      selector: (row) => row.Country,
      sortable: true,
      reorder: true,
      style: {
        color: props.theme === "dark" ? "rgb(172, 172, 172)" : "rgb(72, 72, 72)",
        backgroundColor: props.theme === "dark" ? "rgb(29, 39, 52)" : "white",
      },
    },
    {
      id: 2,
      name: "New Confirmed",
      selector: (row) => row.NewConfirmed,
      sortable: true,
      right: true,
      reorder: true,
      style: {
        color: props.theme === "dark" ? "rgb(172, 172, 172)" : "rgb(72, 72, 72)",
        backgroundColor: props.theme === "dark" ? "rgb(29, 39, 52)" : "white",
      },
    },
    {
      id: 3,
      name: "New Deaths",
      selector: (row) => row.NewDeaths,
      sortable: true,
      right: true,
      reorder: true,
      style: {
        color: props.theme === "dark" ? "rgb(172, 172, 172)" : "rgb(72, 72, 72)",
        backgroundColor: props.theme === "dark" ? "rgb(29, 39, 52)" : "white",
      },
    },
    {
      id: 4,
      name: "New Recovered",
      selector: (row) => row.NewRecovered,
      sortable: true,
      right: true,
      reorder: true,
      style: {
        color: props.theme === "dark" ? "rgb(172, 172, 172)" : "rgb(72, 72, 72)",
        backgroundColor: props.theme === "dark" ? "rgb(29, 39, 52)" : "white",
      },
    },
    {
      id: 5,
      name: "Date",
      selector: () => props.data.date,
      sortable: true,
      right: true,
      reorder: true,
      style: {
        color: props.theme === "dark" ? "rgb(172, 172, 172)" : "rgb(72, 72, 72)",
        backgroundColor: props.theme === "dark" ? "rgb(29, 39, 52)" : "white",
      },
    }
  ];

  return(
    <DataTable
      columns={columns}
      data={data}
      defaultSortFieldId={1}
      paginationPerPage={7}
      paginationComponentOptions={{ noRowsPerPage: true }}
      pagination
    />
  );
};

export default CountriesDataTable;