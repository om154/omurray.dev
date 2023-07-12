interface Props {
  width?: number
  height?: number
  className?:string
}

const LINKEDIN_BLUE: string = '#0a66c2'

const LinkedInLogo = ({ width = 20, height = 20, className }: Props) => (
  <svg
    fill={LINKEDIN_BLUE}
    className={className}
    width={width}
    height={height}
    preserveAspectRatio="xMinYMin meet"
    viewBox="0 0 64.79 64.79"
  >
    <path
      d="M55.28 55.23h-9.6V40.198c0-3.585-.063-8.2-4.992-8.2-5 0-5.765 3.906-5.765 7.939V55.23h-9.6V24.314h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zM14.49 20.089a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143H9.68V24.314h9.61zM60.068.03H4.857A4.728 4.728 0 0 0 .076 4.7V60.14a4.731 4.731 0 0 0 4.78 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.697a4.738 4.738 0 0 0-4.8-4.67"
    />
  </svg>
)

export default LinkedInLogo
