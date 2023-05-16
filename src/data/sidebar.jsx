import { RiAddCircleLine } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { TbDatabase } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

const menu = [
  // {
  //   title: "Dashboard",
  //   icon: <FaTh />,
  //   path: "/dashboard",
  // },
  // {
  //   title: "Vendas",
  //   icon: <MdOutlineAttachMoney />,
  //   path: "/sales",
  // },
  {
    title: "Estoque",
    icon: <TbDatabase />,
    path: "/storage",
  },
  {
    title: "Adicionar",
    icon: <RiAddCircleLine />,
    path: "/add-product",
      //   childrens: [
      // {
      //   title: "Venda",
      //   path: "/profile",
      // },
      // {
      //   title: "Produto",
      //   path: "/edit-profile",
      // },
    // ],
  },
  // {
  //   title: "Pagamentos",
  //   icon: <MdOutlinePayments />,
  //   path: "/payments",
  // },
  {
    title: "Conta",
    icon: <BsPersonCircle />,
    path: "/profile",
  },
  {
    title: "Suporte",
    icon: <MdOutlineMail />,
    path: "/contact-us",
  },
];

export default menu;
