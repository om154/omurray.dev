interface Props {
  width?: number
  height?: number
  className?: string
}

const AccentureLogo = ({ width = 75, height = 32, className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    viewBox="0 0 163.2 43"
  >
    <path
      d="m95.1 12 9.4-3.5-9.4-3.6V0l16.1 6.5v4L95.1 17z"
      style={{
        fill: "#a100ff",
      }}
    />
    <path d="M6.2 43C2.8 43 0 41.3 0 37.5v-.2c0-4.6 4-6.2 8.9-6.2h2.3v-.9c0-1.9-.8-3-2.8-3-1.8 0-2.7 1-2.8 2.4h-5c.4-4.2 3.7-6.2 8.1-6.2 4.5 0 7.8 1.9 7.8 6.6v12.6h-5.1v-2.2c-1 1.4-2.7 2.6-5.2 2.6zm5-6.6v-1.8H9.1c-2.6 0-3.9.7-3.9 2.4v.2c0 1.3.8 2.2 2.6 2.2 1.8-.1 3.4-1.1 3.4-3zM28.4 43c-5.2 0-9-3.2-9-9.6v-.3c0-6.4 4-9.8 9-9.8 4.3 0 7.8 2.2 8.2 7.1h-5c-.3-1.8-1.3-3-3.1-3-2.2 0-3.8 1.8-3.8 5.5v.6c0 3.8 1.4 5.5 3.8 5.5 1.8 0 3.1-1.3 3.4-3.4h4.8c-.3 4.4-3.2 7.4-8.3 7.4zM48 43c-5.2 0-9-3.2-9-9.6v-.3c0-6.4 4-9.8 9-9.8 4.3 0 7.8 2.2 8.2 7.1h-5c-.3-1.8-1.3-3-3.1-3-2.2 0-3.8 1.8-3.8 5.5v.6c0 3.8 1.4 5.5 3.8 5.5 1.8 0 3.1-1.3 3.4-3.4h4.8C56 40 53.1 43 48 43zm19.7 0c-5.4 0-9.1-3.2-9.1-9.5v-.4c0-6.3 3.9-9.8 9-9.8 4.7 0 8.6 2.6 8.6 8.9v2.3H63.9c.2 3.4 1.7 4.7 3.9 4.7 2 0 3.1-1.1 3.5-2.4h4.9c-.6 3.5-3.6 6.2-8.5 6.2zM64 31h7c-.1-2.8-1.4-4-3.5-4-1.6.1-3.1 1-3.5 4zm15.4-7.2h5.3v2.8c.9-1.8 2.8-3.2 5.7-3.2 3.4 0 5.7 2.1 5.7 6.6v12.6h-5.3V30.8c0-2.2-.9-3.2-2.8-3.2-1.8 0-3.3 1.1-3.3 3.5v11.5h-5.3V23.8zm26.4-5.7v5.7h3.6v3.9h-3.6v8.9c0 1.4.6 2.1 1.9 2.1.8 0 1.3-.1 1.8-.3v4.1c-.6.2-1.7.4-3 .4-4.1 0-6-1.9-6-5.7v-9.5h-2.2v-3.9h2.2v-3.5l5.3-2.2zm23.4 24.5H124v-2.8c-.9 1.8-2.7 3.2-5.5 3.2-3.4 0-5.9-2.1-5.9-6.5V23.8h5.3v12c0 2.2.9 3.2 2.7 3.2 1.8 0 3.3-1.2 3.3-3.5V23.8h5.3v18.8zm3.9-18.8h5.3v3.5c1.1-2.5 2.9-3.7 5.7-3.7v5.2c-3.6 0-5.7 1.1-5.7 4.2v9.7h-5.3V23.8zM154.8 43c-5.4 0-9.1-3.2-9.1-9.5v-.4c0-6.3 3.9-9.8 9-9.8 4.7 0 8.6 2.6 8.6 8.9v2.3h-12.2c.2 3.4 1.7 4.7 3.9 4.7 2 0 3.1-1.1 3.5-2.4h4.9c-.8 3.5-3.7 6.2-8.6 6.2zM151 31h7.1c-.1-2.8-1.4-4-3.5-4-1.6.1-3.1 1-3.6 4z" />
  </svg>
)

export default AccentureLogo