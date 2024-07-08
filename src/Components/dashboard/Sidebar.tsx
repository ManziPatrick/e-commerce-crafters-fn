import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../../services/Logout";

const Sidebar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  const [active, setActive] = useState<string>("001");
  const Navlinks = [
    {
      id: "001",
      label: "Dashboard",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.34"
            d="M10 15V12.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.39076 2.34992L2.61575 6.97491C1.96575 7.49158 1.54908 8.58321 1.69075 9.39987L2.79908 16.0332C2.99908 17.2165 4.13241 18.1749 5.33241 18.1749H14.6658C15.8574 18.1749 16.9991 17.2082 17.1991 16.0332L18.3074 9.39987C18.4408 8.58321 18.0241 7.49158 17.3824 6.97491L11.6074 2.35825C10.7158 1.64158 9.27409 1.64158 8.39076 2.34992Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      location: "/admin",
    },
    {
      id: "002",
      label: "Users",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.63411 9.05829C7.55078 9.04996 7.45078 9.04996 7.35911 9.05829C5.37578 8.99163 3.80078 7.36663 3.80078 5.36663C3.80078 3.32496 5.45078 1.66663 7.50078 1.66663C9.54241 1.66663 11.2007 3.32496 11.2007 5.36663C11.1924 7.36663 9.61741 8.99163 7.63411 9.05829Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M13.6747 3.33337C15.2914 3.33337 16.5914 4.64171 16.5914 6.25004C16.5914 7.82504 15.3414 9.10837 13.7831 9.16671C13.7164 9.15837 13.6414 9.15837 13.5664 9.16671"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.46758 12.1334C1.45091 13.4834 1.45091 15.6834 3.46758 17.025C5.75924 18.5584 9.51758 18.5584 11.8092 17.025C13.8259 15.675 13.8259 13.475 11.8092 12.1334C9.52591 10.6084 5.76758 10.6084 3.46758 12.1334Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M15.2832 16.6667C15.8832 16.5417 16.4499 16.3 16.9165 15.9417C18.2165 14.9667 18.2165 13.3584 16.9165 12.3834C16.4582 12.0334 15.8999 11.8 15.3082 11.6667"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      location: "/admin/users",
    },
    {
      id: "003",
      label: "Sellers",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.63411 9.05829C7.55078 9.04996 7.45078 9.04996 7.35911 9.05829C5.37578 8.99163 3.80078 7.36663 3.80078 5.36663C3.80078 3.32496 5.45078 1.66663 7.50078 1.66663C9.54241 1.66663 11.2007 3.32496 11.2007 5.36663C11.1924 7.36663 9.61741 8.99163 7.63411 9.05829Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M13.6747 3.33337C15.2914 3.33337 16.5914 4.64171 16.5914 6.25004C16.5914 7.82504 15.3414 9.10837 13.7831 9.16671C13.7164 9.15837 13.6414 9.15837 13.5664 9.16671"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.46758 12.1334C1.45091 13.4834 1.45091 15.6834 3.46758 17.025C5.75924 18.5584 9.51758 18.5584 11.8092 17.025C13.8259 15.675 13.8259 13.475 11.8092 12.1334C9.52591 10.6084 5.76758 10.6084 3.46758 12.1334Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M15.2832 16.6667C15.8832 16.5417 16.4499 16.3 16.9165 15.9417C18.2165 14.9667 18.2165 13.3584 16.9165 12.3834C16.4582 12.0334 15.8999 11.8 15.3082 11.6667"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      location: "/admin/sellers",
    },
    {
      id: "004",
      label: "Analytics",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M2.91699 15V5.83332C2.91699 2.49999 3.75033 1.66666 7.08366 1.66666H12.917C16.2503 1.66666 17.0837 2.49999 17.0837 5.83332V14.1667C17.0837 14.2833 17.0837 14.4 17.0753 14.5167"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.29199 12.5H17.0837V15.4167C17.0837 17.025 15.7753 18.3333 14.167 18.3333H5.83366C4.22533 18.3333 2.91699 17.025 2.91699 15.4167V14.875C2.91699 13.5667 3.98366 12.5 5.29199 12.5Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M6.66699 5.83334H13.3337"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M6.66699 8.75H10.8337"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),

      location: "/admin/analytics",
    },
    {
      id: "005",
      label: "Settings",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50033 18.3333H12.5003C16.667 18.3333 18.3337 16.6667 18.3337 12.5V7.5C18.3337 3.33334 16.667 1.66667 12.5003 1.66667H7.50033C3.33366 1.66667 1.66699 3.33334 1.66699 7.5V12.5C1.66699 16.6667 3.33366 18.3333 7.50033 18.3333Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g opacity="0.4">
            <path
              d="M12.9756 15.4163V12.1663"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9756 6.20833V4.58333"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9743 10.5418C14.171 10.5418 15.141 9.57175 15.141 8.37517C15.141 7.17855 14.171 6.2085 12.9743 6.2085C11.7777 6.2085 10.8076 7.17855 10.8076 8.37517C10.8076 9.57175 11.7777 10.5418 12.9743 10.5418Z"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.02441 15.4165V13.7915"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.02441 7.83333V4.58333"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.02507 13.7913C8.22168 13.7913 9.19175 12.8213 9.19175 11.6247C9.19175 10.4281 8.22168 9.458 7.02507 9.458C5.82845 9.458 4.8584 10.4281 4.8584 11.6247C4.8584 12.8213 5.82845 13.7913 7.02507 13.7913Z"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ),

      location: "/admin/settings",
    },
  ];

  const handleNavigate = (data: any) => {
    setActive(data.id);
    navigate(data.location);
  };
  const handelLogout = Logout();

  return (
    <div className="fixed h-[100vh] flex flex-col gap-[40px] bg-primary p-4 w-[15%]">
      <div>
        <svg
          width="150"
          height="49"
          viewBox="0 0 150 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_459_1870)">
            <path
              d="M68.1934 13.6565C68.1934 13.1727 68.3732 12.7668 68.7327 12.4385C69.1095 12.093 69.5632 11.9202 70.094 11.9202H81.7807C81.7807 13.0604 81.5924 13.8897 81.2156 14.408C80.8389 14.9262 80.2311 15.1854 79.392 15.1854H71.969V19.1502H78.6985C78.6985 20.2904 78.5102 21.1196 78.1334 21.6379C77.7567 22.1562 77.1489 22.4153 76.3098 22.4153H71.969V27.6758C71.969 28.5914 71.6694 29.2566 71.0701 29.6712C70.4878 30.0858 69.529 30.2931 68.1934 30.2931V13.6565ZM88.8634 15.2113H82.6733C82.6733 13.0172 83.6578 11.9202 85.6271 11.9202H98.8034C98.8034 14.1143 97.8188 15.2113 95.8497 15.2113H92.639V27.5463C92.639 28.4446 92.3137 29.127 91.663 29.5935C91.0294 30.0599 90.0962 30.2931 88.8634 30.2931V15.2113ZM100.851 13.6565C100.851 13.1727 101.031 12.7668 101.391 12.4385C101.767 12.093 102.221 11.9202 102.752 11.9202H114.233C114.233 13.0604 114.045 13.8897 113.668 14.408C113.291 14.9262 112.684 15.1854 111.844 15.1854H104.627V19.2798H111.356C111.356 20.42 111.168 21.2492 110.791 21.7675C110.414 22.2858 109.807 22.5449 108.968 22.5449H104.627V26.7948H112.384C113.206 26.7948 113.805 27.0539 114.182 27.5722C114.559 28.0905 114.747 28.9197 114.747 30.0599H102.752C102.221 30.0599 101.767 29.8958 101.391 29.5675C101.031 29.2393 100.851 28.8246 100.851 28.3237V13.6565ZM117.055 13.6565C117.055 13.1555 117.235 12.7409 117.595 12.4126C117.971 12.0843 118.425 11.9202 118.956 11.9202H125.711C127.628 11.9202 129.102 12.4212 130.129 13.4232C131.173 14.408 131.696 15.8159 131.696 17.6472C131.696 18.6664 131.49 19.5216 131.079 20.2127C130.685 20.9037 130.068 21.4479 129.23 21.8452V21.9489C130.72 22.6226 131.465 23.8924 131.465 25.7582V27.5463C131.465 28.4446 131.139 29.127 130.489 29.5935C129.855 30.0599 128.922 30.2931 127.689 30.2931V25.8878C127.689 25.024 127.517 24.3934 127.175 23.9961C126.85 23.5814 126.344 23.3741 125.66 23.3741H120.78V27.5463C120.78 28.4446 120.462 29.127 119.829 29.5935C119.195 30.0599 118.271 30.2931 117.055 30.2931V13.6565ZM125.506 20.1349C126.293 20.1349 126.893 19.919 127.304 19.4871C127.715 19.0551 127.92 18.4332 127.92 17.6213C127.92 16.7747 127.723 16.1528 127.329 15.7555C126.952 15.3582 126.344 15.1595 125.506 15.1595H120.78V20.1349H125.506ZM141.531 30.2931C139.133 30.2931 137.232 29.8785 135.829 29.0493C134.442 28.22 133.749 27.0712 133.749 25.6027C133.749 24.9635 133.988 24.4452 134.468 24.0479C134.946 23.6506 135.752 23.4519 136.882 23.4519C136.95 24.7131 137.378 25.6719 138.166 26.3283C138.971 26.9676 140.093 27.2871 141.531 27.2871C142.644 27.2871 143.517 27.0971 144.151 26.717C144.784 26.3197 145.101 25.7755 145.101 25.0845C145.101 24.618 144.981 24.2379 144.742 23.9442C144.501 23.6506 144.082 23.3827 143.483 23.1409C142.901 22.8991 142.045 22.6486 140.915 22.3894C139.202 21.9921 137.858 21.5429 136.882 21.0419C135.906 20.5409 135.195 19.9449 134.75 19.2538C134.322 18.5628 134.108 17.699 134.108 16.6625C134.108 15.6777 134.399 14.814 134.981 14.0711C135.58 13.311 136.41 12.7236 137.473 12.3089C138.534 11.8943 139.767 11.687 141.171 11.687C142.507 11.687 143.705 11.8684 144.767 12.2312C145.829 12.5767 146.659 13.069 147.259 13.7083C147.858 14.3475 148.158 15.0817 148.158 15.911C148.158 16.5502 147.917 17.0598 147.439 17.4399C146.976 17.8027 146.206 18.0014 145.127 18.0359C145.041 16.8784 144.69 16.0319 144.074 15.4963C143.457 14.9608 142.49 14.693 141.171 14.693C140.093 14.693 139.262 14.8658 138.68 15.2113C138.097 15.5568 137.807 16.0578 137.807 16.7143C137.807 17.1634 137.918 17.5349 138.141 17.8286C138.363 18.105 138.74 18.3555 139.271 18.5801C139.818 18.8047 140.597 19.0292 141.608 19.2538C143.371 19.6512 144.767 20.109 145.795 20.6273C146.839 21.1282 147.593 21.733 148.055 22.4412C148.534 23.1495 148.774 24.022 148.774 25.0585C148.774 26.1124 148.474 27.0366 147.875 27.8313C147.293 28.626 146.453 29.2393 145.358 29.6712C144.279 30.0858 143.003 30.2931 141.531 30.2931Z"
              fill="white"
            />
            <path
              d="M8.88694 30.2931C7.34584 30.2931 5.96742 29.9908 4.75167 29.3861C3.53592 28.7815 2.58557 27.9436 1.90064 26.8725C1.23283 25.7841 0.898926 24.5489 0.898926 23.1668V18.7615C0.898926 17.3794 1.22427 16.1528 1.87495 15.0817C2.54276 14.0107 3.46742 13.1814 4.64893 12.594C5.84756 11.9894 7.20886 11.687 8.73283 11.687C10.2568 11.687 11.6181 11.9202 12.8167 12.3867C14.0154 12.8358 14.9401 13.4751 15.5907 14.3043C16.2585 15.1335 16.5924 16.075 16.5924 17.1289C16.5924 17.82 16.3698 18.3642 15.9246 18.7615C15.4794 19.1416 14.8715 19.3316 14.101 19.3316C13.6558 19.3316 13.2192 19.2712 12.791 19.1502C12.8424 18.7874 12.8681 18.3469 12.8681 17.8286C12.8681 16.9993 12.4828 16.3256 11.7123 15.8073C10.9417 15.2717 9.94858 15.004 8.73283 15.004C7.5342 15.004 6.55817 15.3582 5.80475 16.0664C5.05133 16.7575 4.67461 17.6558 4.67461 18.7615V23.1668C4.67461 24.2897 5.05989 25.2054 5.83043 25.9137C6.61811 26.622 7.63694 26.9762 8.88694 26.9762C10.1027 26.9762 11.0873 26.717 11.8407 26.1987C12.6113 25.6805 12.9965 25.0067 12.9965 24.1775C12.9965 23.6074 12.9708 23.1927 12.9195 22.9336C13.3818 22.8299 13.8013 22.7781 14.178 22.7781C14.9486 22.7781 15.565 22.9768 16.0274 23.3741C16.4897 23.7714 16.7208 24.3156 16.7208 25.0067C16.7208 26.026 16.3869 26.9416 15.7191 27.7536C15.0685 28.5483 14.1438 29.1702 12.9452 29.6194C11.7637 30.0685 10.4109 30.2931 8.88694 30.2931ZM19.0209 13.6565C19.0209 13.1555 19.2007 12.7409 19.5603 12.4126C19.9369 12.0843 20.3907 11.9202 20.9216 11.9202H27.6767C29.5944 11.9202 31.0671 12.4212 32.0945 13.4232C33.139 14.408 33.6613 15.8159 33.6613 17.6472C33.6613 18.6664 33.4558 19.5216 33.0448 20.2127C32.6509 20.9037 32.0345 21.4479 31.1955 21.8452V21.9489C32.6853 22.6226 33.4301 23.8924 33.4301 25.7582V27.5463C33.4301 28.4446 33.1047 29.127 32.4541 29.5935C31.8205 30.0599 30.8873 30.2931 29.6544 30.2931V25.8878C29.6544 25.024 29.4832 24.3934 29.1407 23.9961C28.8154 23.5814 28.3102 23.3741 27.6253 23.3741H22.7452V27.5463C22.7452 28.4446 22.4283 29.127 21.7948 29.5935C21.1613 30.0599 20.2366 30.2931 19.0209 30.2931V13.6565ZM27.4712 20.1349C28.2588 20.1349 28.8582 19.919 29.2692 19.4871C29.6801 19.0551 29.8856 18.4332 29.8856 17.6213C29.8856 16.7747 29.6887 16.1528 29.2949 15.7555C28.9181 15.3582 28.3102 15.1595 27.4712 15.1595H22.7452V20.1349H27.4712Z"
              fill="white"
            />
            <path
              d="M62.3816 7.77414H59.754V9.06781C59.754 10.4951 58.5787 11.6612 57.1263 11.6612C55.6803 11.6612 54.4988 10.5012 54.4988 9.06781V7.77414H49.2497V9.06781C49.2497 10.4951 48.0742 11.6612 46.622 11.6612C45.176 11.6612 43.9945 10.5012 43.9945 9.06781V7.77414H41.3791C41.3791 20.729 40.0684 31.0966 40.0684 31.0966H63.6985C63.6923 31.0966 62.3816 20.729 62.3816 7.77414ZM46.6282 10.3676C47.3544 10.3676 47.9389 9.79056 47.9389 9.07388V6.48047C47.9389 4.33043 49.6989 2.5934 51.8773 2.5934C54.0557 2.5934 55.8156 4.33043 55.8156 6.48047V9.07388C55.8156 9.79056 56.4003 10.3676 57.1263 10.3676C57.8525 10.3676 58.4371 9.79056 58.4371 9.07388V6.48047C58.4433 2.90315 55.5018 0 51.8773 0C48.2527 0 45.3113 2.90315 45.3113 6.48047V9.07388C45.3174 9.78448 45.902 10.3676 46.6282 10.3676Z"
              fill="#C9974C"
            />
            <path
              d="M80.1824 43.1641C79.7126 43.6382 79.1612 44.0107 78.5283 44.2816C77.905 44.5524 77.2386 44.6879 76.529 44.6879C75.8194 44.6879 75.153 44.5524 74.5297 44.2816C73.9063 44.0107 73.3646 43.6382 72.9043 43.1641C72.4345 42.6998 72.0652 42.1532 71.7968 41.5243C71.5283 40.8954 71.394 40.2231 71.394 39.5072C71.394 38.7912 71.5283 38.1189 71.7968 37.4901C72.0652 36.8515 72.4345 36.2952 72.9043 35.8212C73.3646 35.3568 73.9063 34.9892 74.5297 34.7183C75.153 34.4377 75.8194 34.2975 76.529 34.2975C77.2386 34.2975 77.905 34.4377 78.5283 34.7183C79.1612 34.9892 79.7126 35.3568 80.1824 35.8212C80.6427 36.2952 81.0071 36.8515 81.2756 37.4901C81.5537 38.1189 81.6927 38.7912 81.6927 39.5072C81.6927 40.2231 81.5537 40.8954 81.2756 41.5243C81.0071 42.1532 80.6427 42.6998 80.1824 43.1641ZM73.3214 42.7578C73.7242 43.1835 74.1988 43.5173 74.7454 43.7591C75.3015 44.001 75.8865 44.1219 76.5002 44.1219C77.1331 44.1219 77.7276 44.001 78.2838 43.7591C78.8496 43.5173 79.3433 43.1835 79.7653 42.7578C80.1776 42.3419 80.5037 41.8581 80.7434 41.3066C80.983 40.7456 81.103 40.1457 81.103 39.5072C81.103 38.8687 80.983 38.2737 80.7434 37.7222C80.5037 37.1612 80.1776 36.6678 79.7653 36.2421C79.3433 35.8261 78.8543 35.4971 78.2982 35.2553C77.7516 35.0037 77.1619 34.8779 76.529 34.8779C75.9057 34.8779 75.3159 35.0037 74.7598 35.2553C74.2132 35.4971 73.7337 35.8261 73.3214 36.2421C72.9091 36.658 72.5831 37.1514 72.3434 37.7222C72.1037 38.2833 71.9838 38.8832 71.9838 39.5217C71.9838 40.1506 72.1037 40.7456 72.3434 41.3066C72.5831 41.8677 72.9091 42.3515 73.3214 42.7578ZM85.4775 44.5718H82.7015V44.0058H83.8234V39.6958H82.7878V39.1299H84.298L84.3124 39.6523C84.322 39.8168 84.3315 39.9667 84.3412 40.1022C84.3508 40.2279 84.3603 40.373 84.37 40.5375C84.5617 40.0828 84.8686 39.7152 85.2905 39.4346C85.7124 39.154 86.1919 39.0138 86.7289 39.0138C87.2562 39.0138 87.6734 39.1638 87.9802 39.4637C88.287 39.7635 88.4501 40.1553 88.4693 40.6391V44.0058H89.5337V44.5718H86.7576V44.0058H87.8796V40.7987C87.8603 40.4795 87.7453 40.2086 87.5344 39.9861C87.333 39.7539 87.0309 39.6282 86.6282 39.6088C86.3309 39.6088 86.048 39.6572 85.7796 39.7539C85.511 39.8506 85.2809 39.9861 85.0891 40.1602C84.8781 40.344 84.7103 40.5569 84.5857 40.7987C84.4707 41.0406 84.4131 41.3066 84.4131 41.5969V44.0058H85.4775V44.5718ZM93.3154 44.5718H90.5394V44.0058H91.6038V34.2539H90.5825V33.688H92.1935V44.0058H93.3154V44.5718ZM97.0939 44.5718H94.3178V44.0058H95.4254V39.6958H94.3178V39.1299H96.0151V44.0058H97.0939V44.5718ZM96.2021 37.1998C96.2021 37.3353 96.1541 37.4514 96.0583 37.5481C95.9624 37.6352 95.8521 37.6787 95.7274 37.6787C95.6124 37.6787 95.5069 37.6352 95.411 37.5481C95.3151 37.4514 95.2672 37.3353 95.2672 37.1998C95.2672 37.0644 95.3151 36.9531 95.411 36.8661C95.5069 36.7693 95.6124 36.7209 95.7274 36.7209C95.8521 36.7209 95.9624 36.7693 96.0583 36.8661C96.1541 36.9531 96.2021 37.0644 96.2021 37.1998ZM100.872 44.5718H98.0963V44.0058H99.2182V39.6958H98.1826V39.1299H99.6929L99.7073 39.6523C99.7169 39.8168 99.7265 39.9667 99.736 40.1022C99.7457 40.2279 99.7552 40.373 99.7648 40.5375C99.9566 40.0828 100.263 39.7152 100.685 39.4346C101.107 39.154 101.587 39.0138 102.124 39.0138C102.651 39.0138 103.069 39.1638 103.375 39.4637C103.682 39.7635 103.845 40.1553 103.864 40.6391V44.0058H104.928V44.5718H102.152V44.0058H103.274V40.7987C103.256 40.4795 103.141 40.2086 102.929 39.9861C102.728 39.7539 102.426 39.6282 102.023 39.6088C101.726 39.6088 101.443 39.6572 101.174 39.7539C100.906 39.8506 100.676 39.9861 100.484 40.1602C100.273 40.344 100.105 40.5569 99.9806 40.7987C99.8655 41.0406 99.808 41.3066 99.808 41.5969V44.0058H100.872V44.5718ZM108.753 39.5943C108.389 39.5943 108.054 39.6717 107.746 39.8265C107.45 39.9812 107.2 40.1892 106.998 40.4505C106.806 40.702 106.673 40.9874 106.596 41.3066C106.519 41.6163 106.515 41.9355 106.581 42.2644C107.234 42.0032 107.881 41.7469 108.523 41.4953C109.176 41.2341 109.827 40.9729 110.479 40.7117C110.307 40.3828 110.067 40.1167 109.76 39.9135C109.463 39.7007 109.127 39.5943 108.753 39.5943ZM110.638 43.9188C110.388 44.1509 110.105 44.3347 109.789 44.4702C109.472 44.6057 109.127 44.6734 108.753 44.6734C108.36 44.6734 107.991 44.6008 107.646 44.4557C107.31 44.3106 107.013 44.1074 106.754 43.8462C106.495 43.585 106.294 43.2851 106.15 42.9465C106.006 42.6078 105.934 42.2403 105.934 41.8436C105.934 41.4566 106.006 41.089 106.15 40.7407C106.294 40.3924 106.495 40.0925 106.754 39.841C107.013 39.5894 107.31 39.3911 107.646 39.246C107.991 39.0912 108.36 39.0138 108.753 39.0138C109.05 39.0138 109.334 39.067 109.602 39.1734C109.87 39.2701 110.11 39.4153 110.321 39.6088C110.522 39.7829 110.7 39.9957 110.853 40.2473C111.006 40.4891 111.132 40.7552 111.227 41.0454C110.479 41.3453 109.731 41.6404 108.983 41.9307C108.245 42.2209 107.502 42.5208 106.754 42.8304C106.927 43.2077 107.191 43.5124 107.545 43.7446C107.9 43.9768 108.302 44.0929 108.753 44.0929C109.05 44.0929 109.329 44.0397 109.588 43.9333C109.846 43.8268 110.077 43.6769 110.278 43.4834L110.638 43.9188ZM119.889 44.1074C119.745 44.2815 119.558 44.4218 119.328 44.5283C119.107 44.6347 118.834 44.6879 118.508 44.6879C118.201 44.6879 117.899 44.6492 117.602 44.5718C117.315 44.5041 117.061 44.3638 116.84 44.1509V43.0916H117.372V43.8317C117.554 43.9478 117.741 44.0252 117.933 44.0639C118.125 44.0929 118.327 44.1074 118.537 44.1074C118.681 44.1074 118.82 44.088 118.954 44.0494C119.089 44.001 119.213 43.9333 119.328 43.8462C119.434 43.7591 119.515 43.6575 119.573 43.5415C119.64 43.4157 119.674 43.2657 119.674 43.0916C119.674 42.84 119.611 42.6466 119.487 42.5111C119.362 42.3756 119.199 42.2693 118.997 42.1919C118.805 42.1048 118.595 42.0274 118.365 41.9597C118.134 41.892 117.919 41.8097 117.717 41.713C117.516 41.6163 117.348 41.4808 117.214 41.3066C117.09 41.1229 117.027 40.8713 117.027 40.552C117.027 40.2908 117.07 40.0683 117.156 39.8845C117.252 39.7007 117.377 39.5459 117.53 39.4201C117.683 39.2944 117.861 39.2024 118.063 39.1444C118.264 39.0767 118.451 39.0428 118.623 39.0428C118.748 39.0428 118.868 39.0525 118.983 39.0718C119.098 39.0815 119.233 39.1105 119.386 39.1589C119.51 39.2073 119.63 39.2654 119.745 39.3331C119.86 39.3911 119.966 39.4637 120.062 39.5507V40.6101H119.515V39.8555C119.381 39.778 119.242 39.72 119.098 39.6813C118.954 39.6427 118.801 39.6233 118.638 39.6233C118.514 39.6233 118.384 39.6427 118.25 39.6813C118.125 39.7104 118.014 39.7588 117.919 39.8265C117.832 39.9039 117.76 40.0006 117.703 40.1167C117.645 40.2328 117.617 40.373 117.617 40.5375C117.617 40.7503 117.683 40.9197 117.818 41.0454C117.962 41.1615 118.129 41.2582 118.321 41.3357C118.523 41.4227 118.733 41.5049 118.954 41.5824C119.184 41.6501 119.4 41.742 119.602 41.8581C119.794 41.9742 119.952 42.1242 120.076 42.308C120.211 42.4917 120.278 42.7384 120.278 43.0481C120.278 43.2222 120.244 43.406 120.177 43.5995C120.119 43.7833 120.024 43.9527 119.889 44.1074ZM124.007 44.5718H121.231V44.0058H122.353V34.2539H121.289V33.688H122.943V39.8845L122.9 40.5375C123.101 40.0732 123.407 39.7055 123.82 39.4346C124.232 39.1638 124.712 39.0234 125.258 39.0138C125.785 39.0138 126.203 39.1638 126.51 39.4637C126.816 39.7635 126.979 40.1553 126.999 40.6391V44.0058H128.063V44.5718H125.287V44.0058H126.409V40.7987C126.39 40.4795 126.275 40.2086 126.064 39.9861C125.863 39.7539 125.56 39.6282 125.158 39.6088C124.86 39.6088 124.577 39.6572 124.309 39.7539C124.04 39.8506 123.81 39.9861 123.619 40.1602C123.407 40.344 123.24 40.5569 123.115 40.7987C123 41.0406 122.943 41.3066 122.943 41.5969V44.0058H124.007V44.5718ZM133.931 43.8462C133.672 44.1074 133.365 44.3106 133.01 44.4557C132.665 44.6008 132.295 44.6734 131.903 44.6734C131.5 44.6734 131.126 44.6008 130.781 44.4557C130.445 44.3106 130.152 44.1074 129.903 43.8462C129.644 43.5946 129.443 43.2996 129.299 42.961C129.155 42.6127 129.083 42.2403 129.083 41.8436C129.083 41.4566 129.155 41.089 129.299 40.7407C129.443 40.3924 129.644 40.0877 129.903 39.8265C130.152 39.5749 130.45 39.3766 130.795 39.2315C131.14 39.0767 131.509 38.9993 131.903 38.9993C132.295 38.9993 132.665 39.0767 133.01 39.2315C133.365 39.3766 133.672 39.5749 133.931 39.8265C134.179 40.0877 134.377 40.3924 134.52 40.7407C134.673 41.089 134.751 41.4566 134.751 41.8436C134.751 42.2403 134.673 42.6078 134.52 42.9465C134.377 43.2851 134.179 43.585 133.931 43.8462ZM130.32 43.4254C130.522 43.6382 130.756 43.8027 131.025 43.9188C131.293 44.0349 131.581 44.0929 131.888 44.0929C132.194 44.0929 132.482 44.0349 132.751 43.9188C133.029 43.8027 133.269 43.6382 133.47 43.4254C133.681 43.2318 133.844 42.9996 133.959 42.7288C134.075 42.4579 134.132 42.1628 134.132 41.8436C134.132 41.5437 134.075 41.2582 133.959 40.9874C133.844 40.7068 133.681 40.4601 133.47 40.2473C133.269 40.0441 133.029 39.8845 132.751 39.7684C132.482 39.6523 132.194 39.5943 131.888 39.5943C131.581 39.5943 131.293 39.6523 131.025 39.7684C130.756 39.8845 130.522 40.0441 130.32 40.2473C130.119 40.4601 129.961 40.702 129.846 40.9729C129.731 41.2437 129.673 41.534 129.673 41.8436C129.673 42.1628 129.731 42.4579 129.846 42.7288C129.961 42.9996 130.119 43.2318 130.32 43.4254ZM135.87 48.1997V47.6338H136.834V39.6958H135.755V39.1299H137.309C137.309 39.3524 137.313 39.5749 137.323 39.7974C137.342 40.0102 137.352 40.2231 137.352 40.4359C137.514 40.0586 137.798 39.7297 138.201 39.4491C138.603 39.1685 139.092 39.0283 139.668 39.0283C140.051 39.0283 140.416 39.1009 140.761 39.246C141.106 39.3911 141.408 39.5943 141.667 39.8555C141.926 40.1167 142.127 40.4214 142.271 40.7697C142.415 41.1084 142.487 41.4711 142.487 41.8581C142.487 42.245 142.415 42.6127 142.271 42.961C142.127 43.3093 141.926 43.6091 141.667 43.8607C141.408 44.1123 141.106 44.3154 140.761 44.4702C140.416 44.6153 140.051 44.6879 139.668 44.6879C139.38 44.6879 139.111 44.6492 138.862 44.5718C138.613 44.5041 138.392 44.4025 138.201 44.267C137.999 44.1413 137.831 44.0058 137.697 43.8607C137.572 43.706 137.476 43.5415 137.409 43.3673C137.409 43.464 137.409 43.5608 137.409 43.6575C137.419 43.7446 137.424 43.8317 137.424 43.9188V47.6338H138.646V48.1997H135.87ZM139.668 39.6088C139.341 39.6088 139.039 39.6668 138.762 39.7829C138.492 39.899 138.258 40.0586 138.057 40.2618C137.855 40.465 137.697 40.7068 137.582 40.9874C137.476 41.2582 137.424 41.5485 137.424 41.8581C137.424 42.1774 137.481 42.4772 137.596 42.7578C137.712 43.0287 137.874 43.2706 138.085 43.4834C138.287 43.6769 138.521 43.8317 138.79 43.9478C139.058 44.0542 139.351 44.1074 139.668 44.1074C139.965 44.1074 140.247 44.0542 140.516 43.9478C140.784 43.8317 141.02 43.6769 141.221 43.4834C141.432 43.2802 141.595 43.0384 141.71 42.7578C141.834 42.4772 141.897 42.1774 141.897 41.8581C141.897 41.5292 141.834 41.2244 141.71 40.9439C141.595 40.6633 141.432 40.4214 141.221 40.2183C141.02 40.0345 140.784 39.8894 140.516 39.7829C140.247 39.6668 139.965 39.6088 139.668 39.6088Z"
              fill="white"
            />
            <path
              d="M0 38.3525H66.7808V44.5719H6.16438C2.75989 44.5719 0 41.7874 0 38.3525Z"
              fill="#C9974C"
            />
          </g>
          <defs>
            <clipPath id="clip0_459_1870">
              <rect width="150" height="48.718" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col gap-[20px]">
        {Navlinks.map((item, index) => {
          return (
            <div
              onClick={() => handleNavigate(item)}
              key={index}
              className={` cursor-pointer flex flex-row gap-[10px] items-center p-2 rounded-[12px] ${
                pathName === item.location ? "bg-secondary" : ""
              }`}
            >
              {item.icon}
              <span className="text-white text-[16px] font-[500] font-outfit">
                {item.label}
              </span>
            </div>
          );
        })}
        <div
          onClick={handelLogout}
          className="cursor-pointer flex flex-row gap-[10px] items-center p-2 rounded-[12px]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33301 9.99996C3.33301 10.221 3.42081 10.4329 3.57709 10.5892C3.73337 10.7455 3.94533 10.8333 4.16634 10.8333H10.4913L8.57467 12.7416C8.49657 12.8191 8.43457 12.9113 8.39227 13.0128C8.34996 13.1144 8.32818 13.2233 8.32818 13.3333C8.32818 13.4433 8.34996 13.5522 8.39227 13.6538C8.43457 13.7553 8.49657 13.8475 8.57467 13.925C8.65214 14.0031 8.74431 14.0651 8.84586 14.1074C8.94741 14.1497 9.05633 14.1715 9.16634 14.1715C9.27635 14.1715 9.38527 14.1497 9.48682 14.1074C9.58837 14.0651 9.68054 14.0031 9.75801 13.925L13.0913 10.5916C13.1672 10.5124 13.2267 10.4189 13.2663 10.3166C13.3497 10.1137 13.3497 9.88618 13.2663 9.68329C13.2267 9.581 13.1672 9.48755 13.0913 9.40829L9.75801 6.07496C9.68031 5.99726 9.58807 5.93563 9.48655 5.89358C9.38503 5.85153 9.27622 5.82988 9.16634 5.82988C9.05646 5.82988 8.94765 5.85153 8.84613 5.89358C8.74461 5.93563 8.65237 5.99726 8.57467 6.07496C8.49698 6.15266 8.43534 6.2449 8.39329 6.34642C8.35124 6.44794 8.3296 6.55674 8.3296 6.66663C8.3296 6.77651 8.35124 6.88532 8.39329 6.98683C8.43534 7.08835 8.49698 7.18059 8.57467 7.25829L10.4913 9.16663H4.16634C3.94533 9.16663 3.73337 9.25442 3.57709 9.4107C3.42081 9.56698 3.33301 9.77895 3.33301 9.99996ZM14.1663 1.66663H5.83301C5.16997 1.66663 4.53408 1.93002 4.06524 2.39886C3.5964 2.8677 3.33301 3.50358 3.33301 4.16663V6.66663C3.33301 6.88764 3.42081 7.0996 3.57709 7.25588C3.73337 7.41216 3.94533 7.49996 4.16634 7.49996C4.38735 7.49996 4.59932 7.41216 4.7556 7.25588C4.91188 7.0996 4.99967 6.88764 4.99967 6.66663V4.16663C4.99967 3.94561 5.08747 3.73365 5.24375 3.57737C5.40003 3.42109 5.61199 3.33329 5.83301 3.33329H14.1663C14.3874 3.33329 14.5993 3.42109 14.7556 3.57737C14.9119 3.73365 14.9997 3.94561 14.9997 4.16663V15.8333C14.9997 16.0543 14.9119 16.2663 14.7556 16.4225C14.5993 16.5788 14.3874 16.6666 14.1663 16.6666H5.83301C5.61199 16.6666 5.40003 16.5788 5.24375 16.4225C5.08747 16.2663 4.99967 16.0543 4.99967 15.8333V13.3333C4.99967 13.1123 4.91188 12.9003 4.7556 12.744C4.59932 12.5878 4.38735 12.5 4.16634 12.5C3.94533 12.5 3.73337 12.5878 3.57709 12.744C3.42081 12.9003 3.33301 13.1123 3.33301 13.3333V15.8333C3.33301 16.4963 3.5964 17.1322 4.06524 17.6011C4.53408 18.0699 5.16997 18.3333 5.83301 18.3333H14.1663C14.8294 18.3333 15.4653 18.0699 15.9341 17.6011C16.4029 17.1322 16.6663 16.4963 16.6663 15.8333V4.16663C16.6663 3.50358 16.4029 2.8677 15.9341 2.39886C15.4653 1.93002 14.8294 1.66663 14.1663 1.66663Z"
              fill="white"
            />
          </svg>

          <span className="text-white text-[16px] font-[500] font-outfit">
            Sign Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
