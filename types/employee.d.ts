export interface EmployeesContent {
  empleados: {
    main: {
      description: string;
    };
    samm: EmployeesCard;
    rrhh: EmployeesCard;
    help: {
      title: string;
      description: string;
    };
  };
}

interface EmployeesCard {
  title: string;
  subtitle: string;
  description: string;
  item_1: string;
  item_2: string;
  item_3: string;
}
