import React from "react";

function NavBarLogo() {
  return (
    <div className="flex w-fit md:w-full h-full items-center justify-start pr-4">
       <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
      <svg
        width="39"
        height="38"
        viewBox="0 0 39 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.74673 8.84375H11.0699L13.6245 11.9093H5.10918L13.6245 15.7411L16.7751 12.5905V8.84375H21.8843L26.142 15.2302L30.1441 8.84375H35.1682V22.1276L32.273 25.0228H20.1812V27.918H32.273L35.1682 32.6014L32.273 37.0294H2.81005V20.7652L0 18.0403L3.40612 14.2084L0 12.5905L3.74673 8.84375ZM4.76848 17.5293L6.55669 15.7411L11.5807 18.5512H5.4497L4.76848 17.5293ZM15.2424 19.9141L14.2205 21.0211H16.7751L15.2424 19.9141ZM20.1812 21.5315V11.9093L24.8646 18.7215H27.1637L31.6768 11.9093V21.5315H20.1812ZM16.3494 25.0225H6.98254V27.9177H16.3494V25.0225ZM6.98254 30.7285H16.3494V33.6237H6.98254V30.7285ZM29.6332 30.7285H20.2664V33.6237H29.6332L30.9957 32.1761L29.6332 30.7285Z"
          fill="#FCFCFC"
        />
        <path
          d="M17.8043 0.844727L18.4841 2.93699H20.6841L18.9043 4.23008L19.5841 6.32235L17.8043 5.02926L16.0245 6.32235L16.7044 4.23008L14.9246 2.93699H17.1245L17.8043 0.844727Z"
          fill="#FCFCFC"
        />
        <path
          d="M24.8292 1.57129L25.2371 2.91034H26.5571L25.4892 3.73792L25.8971 5.07697L24.8292 4.24939L23.7614 5.07697L24.1692 3.73792L23.1014 2.91034H24.4213L24.8292 1.57129Z"
          fill="#FCFCFC"
        />
        <path
          d="M10.9008 1.57129L11.3359 2.91034H12.7438L11.6048 3.73792L12.0398 5.07697L10.9008 4.24939L9.76172 5.07697L10.1968 3.73792L9.05774 2.91034H10.4657L10.9008 1.57129Z"
          fill="#FCFCFC"
        />
        <circle cx="37.5467" cy="35.4847" r="1.45342" fill="#FCFCFC" />
      </svg>
      </button>
    </div>
  );
}

export default NavBarLogo;
