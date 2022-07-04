import { Box } from "@mui/system";

function ViaHeaderSVG(props) {
  const { width, height } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1"
      viewBox="0 0 375 375"
    >
      <defs>
        <clipPath id="id1">
          <path d="M125 64.137h190v246.75H125zm0 0"></path>
        </clipPath>
        <clipPath id="id2">
          <path d="M199 150h165.305v99.2H199zm0 0"></path>
        </clipPath>
      </defs>
      <path fill="#040606" d="M183.133 66.523l-55.25 55.184h55.25zm0 0"></path>
      <g clipPath="url(#id1)">
        <path
          fill="#040606"
          d="M191.379 245.082v-90.473c.023-6.812 5.527-12.312 12.351-12.332h111.18V68.254c-.02-2.277-1.84-4.117-4.12-4.117H191.378v61.687a4.139 4.139 0 01-4.121 4.117h-61.766V306.77a4.114 4.114 0 004.121 4.117H310.79c2.281 0 4.102-1.84 4.121-4.117v-49.332H203.73c-6.824-.047-12.328-5.543-12.351-12.356"
        ></path>
      </g>
      <path
        fill="#040606"
        d="M275.781 183.395h16.473v16.449H275.78v-16.45"
      ></path>
      <g clipPath="url(#id2)">
        <path
          fill="#040606"
          d="M333.422 224.512h-20.574a4.097 4.097 0 01-4.121-4.098v-41.14c0-2.254 1.84-4.094 4.12-4.094 2.282 0 4.126 1.84 4.126 4.093v37.024h16.449a4.117 4.117 0 014.125 4.117c0 2.277-1.844 4.098-4.125 4.098zM300.5 199.844c-.02 4.535-3.707 8.215-8.246 8.215h-6.996l13.379 8.937c1.886 1.25 2.414 3.813 1.14 5.695a4.1 4.1 0 01-3.398 1.82 3.783 3.783 0 01-2.262-.679l-18.336-12.18v8.762c0 2.277-1.844 4.098-4.125 4.098a4.095 4.095 0 01-4.101-4.098v-41.14a4.107 4.107 0 014.101-4.094h20.598c4.539 0 8.226 3.68 8.246 8.215zm-41.191 16.453c0 4.535-3.684 8.215-8.227 8.215h-16.469c-4.543 0-8.226-3.68-8.226-8.215v-37.024a4.092 4.092 0 014.101-4.093c2.282 0 4.125 1.84 4.125 4.093v37.024h16.469v-37.024c0-2.253 1.844-4.093 4.125-4.093a4.107 4.107 0 014.102 4.093zm100.894-65.805H203.73a4.157 4.157 0 00-4.125 4.117v90.473c.024 2.277 1.844 4.117 4.125 4.117h156.473a4.11 4.11 0 004.102-4.117v-90.473c0-2.257-1.84-4.097-4.102-4.117"
        ></path>
      </g>
      <path
        fill="#040606"
        d="M323.137 281.27l28.668-23.832h-28.668zm0 0"
      ></path>
      <path
        fill="#040606"
        d="M23.41-.367c.246-.61.856-1.219.977-1.707.367-1.582 1.465-2.926 2.562-4.266 1.95-2.074 3.899-4.27 5.121-6.707l1.22-1.707c1.706-2.437 3.655-4.879 5.241-7.316 1.219-1.828 2.196-3.903 3.414-5.73 1.465-2.075 2.805-4.024 3.782-6.098.12-.122.242-.243.242-.368 2.316-2.925 3.781-6.214 6.34-8.898l.367-.488c2.562-3.782 5.12-7.559 7.558-11.34.735-.977 1.098-2.074 1.707-2.926 1.344-2.074 2.93-4.023 4.27-6.098.367-.367.61-.855.852-1.34.734-1.097 1.343-2.32 2.074-3.539.367-.609.73-1.218.976-1.828.364-.851.489-1.828.852-2.804.488-1.34.246-1.828-1.098-1.707-.972 0-2.07.367-3.047.609-.61.121-1.097.488-1.465 1.098-.851 1.218-1.707 2.316-2.437 3.535l-7.316 10.855-5.122 7.438c-1.707 2.316-3.414 4.511-5 6.828-2.804 4.023-5.73 8.047-8.414 12.191-1.218 1.586-2.191 3.293-3.289 4.88-1.465 2.804-9.39 20.73-10.488 9.51 0-.608-.121-1.343.121-2.073.125-.852.488-1.707-.488-1.95-.121 0 0-.367 0-.855-.363.367-.61.73-.852.855-1.097.485-1.707 1.22-1.586 2.317 0 .121-.488.363-.976.851.367-2.558-.61-4.39.246-7.195.488.488 1.098.613 1.219.977.242.73.242 1.586.367 2.316 1.46-.73 2.558-2.558 2.07-3.777-.363 0-.73-.125-1.098-.125.125-.363.247-.61.247-.73 1.218-2.196 1.34-4.145.851-5.852-.242-.977-.488-1.707-.363-2.684 0-.488-.246-.851-.367-1.34l-1.22 1.828c-.12.243-.366.489-.366.73 0 2.075-.121 4.15-.121 6.22-.121.73 0 1.465-.977 2.195-.73-1.219-.851-2.684-.73-4.023.12-1.22-.121-2.438.609-3.782.61-1.097.855-2.316 1.098-3.414.242-1.219.242-2.437.242-3.535 0-.977.246-1.95.976-2.926.489-.73.856-1.707.977-2.437 0-2.074 0-4.27-.367-6.219-.121-1.223-.73-2.32-1.461-3.05-1.344-1.34-3.05-2.438-5.121-2.927-2.196-.609-4.39-.855-6.344-1.828-.121-.12-.363-.12-.484-.12l-7.196-1.098c-.367 0-.855.12-1.586.12.368.61.368.852.61 1.098l1.218.973c.368.367.61.734.368 1.465-.121.488.12 1.097.367 1.34.363.488.851.734 1.46.976.61.367.977.856.977 1.586.121 3.781.368 7.438.368 11.219 0 3.047-.368 6.098-.489 9.144v2.075c-.125 2.925-.125 5.851-.125 8.777 0 2.805 0 5.61.125 8.414L5.977-5c.12 2.074.363 3.902 1.828 5.242 1.34 1.098 2.804 1.953 4.633 2.442 1.218.488 2.804.363 4.511-.735.61-.363 1.465-.61 2.074-.73 1.22-.121 1.829-.852 2.438-1.95zM7.437-7.07c.122-.367.122-.614.122-.977.609 1.586 1.097 3.168.488 5.242-1.098-.367-.363-1.218-.488-1.828-.852-.12-.852-.12-1.098-2.074zm11.95-10.489c0 .73-.121 1.465-.121 2.196-.73-.367-.489-1.098-.489-1.828 0-.125.368-.247.61-.368zm.246-.367a.96.96 0 01.488-.488c0 .125.121.246.121.246a.96.96 0 01-.488.488c-.121 0-.246 0-.367.121zm0 0"
        transform="translate(10.167 239.322)"
      ></path>
      <path
        fill="#040606"
        d="M13.535-62.676c.121-.12-2.926 1.586-2.926 1.586.243.121-.12 2.684.121 2.684 5.852 1.707 8.778-1.098 6.586 7.07-.609 2.316-.367 1.707-.976 4.148-.367 1.22-.246 2.438-.488 3.657-.243 1.097-.122 2.074-.61 3.172-.855 1.707-1.097 3.168-1.586 4.875-.488 2.074-.976 4.27-2.558 6.586-.368.367-.489.851-.735 1.097-1.097 2.805-1.707 5.121-2.195 7.68-.61 1.953-1.219 4.027-1.95 6.098l-.73.976c-.734.488-1.343.852-2.074 1.098-1.586.488-3.047.851-4.633 1.46-1.586.614-3.293 1.344-4.879 2.196-.363.125-.851.61-1.097 1.098l-2.07 3.05c-1.223 2.196-1.223 3.168.484 3.903.613.363 1.097.61 1.953.61C-4.145.12-1.586.12.855-.243c3.047-.367 6.34-.977 9.508-1.465l7.805-1.098c1.586-.242 2.684-.12 3.293.61.367.61 1.219.246 2.195-.121.73-.368 1.098-.73.852-1.34-.242-.856.125-1.832 1.097-3.051.247-.363.368-1.098.61-1.586.367-1.219 1.098-2.68.734-3.777-.125-.246.121-.856.363-1.344-1.218.246-.851-.73-.851-1.582-1.219-.125-2.805-.367-4.39-.246-6.829 1.34-2.438-6.95-.977-10.973l2.683-8.172c.489-1.586.61-3.047.977-4.511l3.414-13.536c.73-2.68.973-2.804 1.586-5.363 1.582-3.902 7.558-3.293 11.215-4.633.246-.855.855-3.293.246-3.539-.61-.363-.61-1.219-.488-1.949.488-2.559-.73-4.023-2.926-4.512-1.707-.61-4.024-.488-6.34.121-3.781.977-7.316 1.832-10.977 3.051-1.828.488-3.777.488-5.851 2.195-.121.852-.61 1.708-1.707 2.438-.246.242-.367.61-.73.852-.489.855 2.07.125 1.34 1.097zM-3.535-1.219c.61-.855 1.34-.976 1.95-1.097 2.44-.247 5.366-.73 8.17-.977 1.099-.242 2.071-.363 3.29-.977.367-.242.613-.242.977-.363 1.585-.246 3.05-.367 4.511-.73.73-.125 1.344-.367 1.828.363l-3.289.367c.485.242 1.22 0 1.828 0 .73-.12 1.461-.246 2.07-.12.614 0 1.223.12 2.075.12-1.34.977-1.828.73-2.926 1.098-.976.12-1.828 0-2.804.363-1.22.61-2.438.735-3.536 1.098-1.218.246-2.562.367-3.78.488l-6.462.73c-1.222 0-2.316-.12-3.539-.12zm34.75-61.332c-.852.121-.977-.246-.61-.855 1.829-1.219 2.563-.367 4.024-.121zM16.094-60.6c.125-.122.125-.122.125-.243.242-.125.488-.125.73-.125.242-.12.367-.12.61-.12v.245zm0 0"
        transform="translate(77.718 239.322)"
      ></path>
      <path
        fill="#fff"
        d="M45.36-40.48c0-.856 0-1.711.12-2.563.368-2.074.489-4.145 1.22-6.098.855-2.558 1.464-5.12 1.464-7.804 0-.485.121-.973.121-1.34.61-3.535 1.098-6.95 1.586-10.485.488-2.683.73-5.367.121-8.05-.12-.61-.363-1.34-.73-1.95-.856-1.097-1.828-2.074-2.805-3.05-.488-.485-1.098-.73-1.707-.852l-5.488-1.34c-1.34-.367-1.707-.246-2.438 1.098-1.949 4.023-3.781 8.289-4.879 12.68-.484 2.558-.972 5.12-1.218 7.804-.122 2.196-.852 4.145-2.196 6.098l-9.386 14.754c-2.684 4.023-5 8.41-8.293 12.07-.243.242-.364.61-.61.977L6.34-24.02c-.242.243-.852.364-1.098.243-1.219-.489-2.437-.977-3.535-1.586-.73-.489-1.465-.852-2.316-.489-.246.856 0 1.465.609 2.075l2.438 1.828 1.097.976c-1.586 2.075.367.121-1.34 1.828l-3.293 3.415c-2.074 2.44-4.144 5-6.097 7.562 2.195 3.047-.489 6.95 5.73 5.973 2.563.855-.972-1.586 1.832-1.828.73-.122 1.098-.368 1.582-.856C4.023-8.293 6.707-11.46 8.781-15.12c.973-1.586 2.438-3.535 4.508-4.266a92.518 92.518 0 006.219-1.707c2.562-.976 5.125-1.707 7.316-3.414.367-.246.856-.367 1.344-.61l.363 1.95c.367 5.367.735 10.61 2.317 15.73l.734 2.926c0 .367 0 1.098-.121 1.098-.734.367-.488.977-.488 1.465.73 3.047 1.828 5.972 3.535 8.656.488.73 1.219 1.219 1.949 1.828.488.367 1.223.73 2.074.488 0-1.464 1.219-.976 2.196-1.097 0-.242 0-.489.12-.61l.368-.488 1.097 1.098c.122-1.098.243-2.074.243-3.047 0-1.344-.121-2.684-.121-4.024-.121-1.953-.243-3.78-.61-5.734-.367-2.437-.61-4.875 0-7.316.121-.852.242-1.582.242-2.438.125-3.168.125-6.46.125-9.512.243-.242.364-.363.485-.363 0-.125.125-.125.246-.246.851-.488 1.098-1.95.363-2.07-.242.242-.363.61-.851 1.097 0-.855 0-1.464.609-1.707.977-.367.977-1.097 1.098-1.953 0-1.097.242-2.316.242-3.414 0-.73.367-1.219.976-1.586 3.293-1.949 6.34-4.144 9.754-5.851.61-.242 1.344-.489 1.586-1.219-.851-.367-1.46-.855-2.195-1.098-.488-.246-1.098-.367-1.586-.246-1.707.125-3.29.61-4.875 1.465l-2.438 1.098zM22.19-37.313c4.27-7.804 7.438-14.996 6.465-1.828-.125 1.95-.246 4.024-.246 5.973-.12.855-.363 1.344-1.219 1.707-9.144 5.977-12.195 3.54-5-5.852zm0 0"
        transform="translate(131.49 239.322)"
      ></path>
    </svg>
  );
}

export default ViaHeaderSVG;
