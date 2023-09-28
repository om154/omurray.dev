import classNames from "classnames"

interface Props {
  width?: number
  height?: number
  fill?: string
  className?: string
}

const AmbientLogo = ({ width = 104.896, height = 22, fill = '#fff', className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1341 300"
    fill="none"
    width={width}
    height={height}
    className={classNames(
      'transition-transform duration-200 row hover:scale-[1.05] ease z-20',
      className
    )}
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M137.739 7.275c6.883-9.7 21.282-9.7 28.164 0l134.552 189.618c5.928 8.355 3.321 20.004-5.603 25.034l-134.551 75.848a17.269 17.269 0 0 1-16.959 0L8.791 221.927c-8.924-5.03-11.531-16.679-5.603-25.034L137.739 7.275ZM26.983 199.732 136.46 45.175c2.433-3.434 7.84-1.713 7.84 2.495v219.112c0 3.305-3.562 5.384-6.44 3.759L29.083 209.113a6.475 6.475 0 0 1-2.1-9.381ZM900.622 62.043c3.646 3.342 8.051 5.013 13.216 5.013 5.317 0 9.723-1.67 13.217-5.013 3.494-3.342 5.241-7.747 5.241-13.216 0-5.47-1.747-9.875-5.241-13.217-3.494-3.342-7.9-5.013-13.217-5.013-5.165 0-9.57 1.671-13.216 5.013-3.494 3.342-5.241 7.748-5.241 13.217s1.747 9.874 5.241 13.216Zm-.056 22.578a2.833 2.833 0 0 0-2.833 2.833v117.251a2.833 2.833 0 0 0 2.833 2.833h25.559a2.834 2.834 0 0 0 2.833-2.833V87.453a2.833 2.833 0 0 0-2.833-2.832h-25.559ZM427.489 211.904c-9.912 0-19.081-2.396-27.507-7.187-8.426-4.956-15.2-12.143-20.321-21.56-5.122-9.417-7.682-20.817-7.682-34.199v-3.965c0-13.382 2.56-24.781 7.682-34.199 5.121-9.417 11.895-16.52 20.321-21.312 8.591-4.956 17.76-7.434 27.507-7.434 11.235 0 19.743 1.9 25.525 5.7 5.89 3.599 10.24 7.765 13.052 12.498V88.349a2.833 2.833 0 0 1 2.833-2.833h22.833a2.833 2.833 0 0 1 2.833 2.833V206.41a2.85 2.85 0 0 1-2.849 2.85h-22.629a2.85 2.85 0 0 1-2.849-2.85v-12.838c-2.783 4.461-6.613 8.424-11.489 11.888-6.113 4.296-15.199 6.444-27.26 6.444Zm27.672-36.429c-6.278 6.112-14.29 9.169-24.038 9.169-9.582 0-17.595-3.057-24.038-9.169-6.443-6.278-9.665-15.365-9.665-27.26v-2.478c0-11.896 3.222-20.9 9.665-27.012 6.443-6.278 14.456-9.417 24.038-9.417s17.595 3.139 24.038 9.417c6.444 6.112 9.665 15.116 9.665 27.012v2.478c0 11.895-3.221 20.982-9.665 27.26Zm75.864-90.85a2.833 2.833 0 0 0-2.833 2.832v117.251a2.833 2.833 0 0 0 2.833 2.833h25.559a2.833 2.833 0 0 0 2.833-2.833v-69.777c0-8.426 1.9-14.869 5.7-19.33 3.965-4.626 9.5-6.939 16.604-6.939 6.278 0 11.151 1.735 14.621 5.205 3.469 3.304 5.204 8.343 5.204 15.116v75.725a2.833 2.833 0 0 0 2.833 2.833h25.559a2.833 2.833 0 0 0 2.833-2.833v-69.777c0-8.426 1.899-14.869 5.699-19.33 3.965-4.626 9.5-6.939 16.604-6.939 6.278 0 11.152 1.735 14.621 5.205 3.469 3.304 5.204 8.343 5.204 15.116v75.725a2.833 2.833 0 0 0 2.833 2.833h25.559a2.833 2.833 0 0 0 2.833-2.833v-77.955c0-9.913-1.9-18.091-5.7-24.534-3.634-6.608-8.591-11.482-14.869-14.621-6.113-3.304-12.969-4.956-20.568-4.956-9.417 0-17.587.584-25.095 5.088-8.096 4.857-10.26 7.963-13.069 13.25-2.809-5.452-6.856-9.83-12.143-13.134-5.287-3.47-12.591-5.255-21.064-5.204-7.864.047-12.968.169-20.106 3.47-6.555 3.03-12.441 7.764-14.588 11.894V87.457a2.833 2.833 0 0 0-2.833-2.833h-25.064Zm254.579 121.293c9.239 4.355 16.881 5.088 27.95 5.088 9.912 0 19.081-2.396 27.507-7.187 8.426-4.956 15.199-12.143 20.321-21.56 5.121-9.417 7.682-20.816 7.682-34.199v-3.965c0-13.382-2.561-24.781-7.682-34.198-5.122-9.417-11.895-16.521-20.321-21.313-8.426-4.956-17.595-7.434-27.507-7.434-7.435 0-13.713.909-18.834 2.726-4.957 1.652-7.793 2.638-12.354 5.47-4.77 2.96-9.619 6.425-11.437 9.399V36.898a2.833 2.833 0 0 0-2.833-2.833h-25.558a2.833 2.833 0 0 0-2.833 2.833v167.806a2.832 2.832 0 0 0 2.833 2.832h25.063a2.833 2.833 0 0 0 2.833-2.832v-12.037c2.808 4.626 8.694 10.198 15.17 13.251Zm42.571-31.341c-6.443 6.113-14.456 9.169-24.038 9.169-9.583 0-17.595-3.056-24.039-9.169-6.443-6.278-9.664-15.365-9.664-27.26v-2.478c0-11.895 3.221-20.899 9.664-27.012 6.444-6.278 14.456-9.417 24.039-9.417 9.747 0 17.76 3.139 24.038 9.417 6.443 6.113 9.665 15.117 9.665 27.012v2.478c0 11.895-3.222 20.982-9.665 27.26Zm281.245-89.954a2.833 2.833 0 0 0-2.83 2.833v117.251a2.833 2.833 0 0 0 2.83 2.833h25.56c1.57 0 2.83-1.268 2.83-2.833V145.09c0-11.399 2.65-20.238 7.93-26.516 5.29-6.443 12.73-9.665 22.31-9.665 8.42 0 14.87 2.313 19.33 6.939 4.62 4.626 6.94 11.565 6.94 20.817v68.042a2.827 2.827 0 0 0 2.83 2.833h25.56c1.56 0 2.83-1.268 2.83-2.833v-70.521c0-10.243-1.98-19.164-5.95-26.764-3.96-7.765-9.58-13.795-16.85-18.09-7.1-4.461-15.45-6.691-25.03-6.691-11.07 0-17.35.532-26.2 5.089-6.86 3.536-12.21 8.706-14.19 13.001V87.456a2.833 2.833 0 0 0-2.83-2.833h-25.07Zm-89.85 126.385c-12.23 0-23.047-2.561-32.464-7.682-9.252-5.287-16.521-12.639-21.808-22.056-5.121-9.582-7.682-20.816-7.682-33.703v-2.974c0-12.886 2.561-24.038 7.682-33.455 5.122-9.582 12.309-16.934 21.56-22.056 9.252-5.286 19.992-7.93 32.212-7.93 12.06 0 22.56 2.726 31.48 8.178 8.92 5.287 15.86 12.721 20.81 22.304 4.96 9.417 7.44 20.403 7.44 32.959v10.656h-89.464c.331 8.426 3.47 15.282 9.417 20.569 5.947 5.287 13.217 7.93 21.807 7.93 8.76 0 15.2-1.9 19.33-5.699 3.33-3.064 6.02-6.396 8.06-9.997.8-1.407 2.56-2.013 3.99-1.262l20.36 10.672c1.39.732 1.93 2.467 1.1 3.812-2.2 3.61-5.11 7.491-8.73 11.644-4.29 4.956-10.08 9.251-17.34 12.886-7.27 3.469-16.53 5.204-27.76 5.204Zm-29.986-79.053h57.496c-.66-7.104-3.55-12.804-8.68-17.1-4.95-4.295-11.48-6.443-19.57-6.443-8.43 0-15.12 2.148-20.077 6.443-4.956 4.296-8.012 9.996-9.169 17.1Zm313.406 75.584c-8.09 0-14.7-2.478-19.82-7.435-4.96-5.121-7.44-11.895-7.44-20.321v-69.388h-27.89a2.836 2.836 0 0 1-2.84-2.833V87.455a2.835 2.835 0 0 1 2.84-2.833h27.89V49.29a2.836 2.836 0 0 1 2.84-2.833h25.55c1.57 0 2.84 1.268 2.84 2.833v35.33h30.87c1.56 0 2.83 1.269 2.83 2.834v20.107a2.834 2.834 0 0 1-2.83 2.833h-30.87v63.936c0 4.957 2.31 7.435 6.94 7.435h20.95c1.57 0 2.84 1.268 2.84 2.833v20.107a2.836 2.836 0 0 1-2.84 2.833h-31.86Z"
      clipRule="evenodd"
    />
  </svg>
)

export default AmbientLogo