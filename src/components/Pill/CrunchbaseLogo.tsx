interface Props {
  width?: number
  height?: number
  opacity?: number
  className?: string
}

const CRUNCHBASE_BLUE = '#146AFF'

const CrunchbaseLogo = ({ width = 20, height = 20, opacity = 1, className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 32 32"
  >
    <title>{"crunchbase"}</title>
    <path
      d="M28.802 0H3.198A3.212 3.212 0 0 0 0 3.198v25.604A3.212 3.212 0 0 0 3.198 32h25.604A3.212 3.212 0 0 0 32 28.802V3.198A3.212 3.212 0 0 0 28.802 0z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M28.802 0H3.198A3.212 3.212 0 0 0 0 3.198v25.604A3.212 3.212 0 0 0 3.198 32h25.604A3.212 3.212 0 0 0 32 28.802V3.198A3.212 3.212 0 0 0 28.802 0zM9.396 19.286a2.81 2.81 0 0 0 3.724-1.391h2.214c-1.38 5.651-9.698 4.651-9.698-1.167 0-5.823 8.318-6.823 9.698-1.167H13.12c-.813-1.786-3.161-2.214-4.547-.823-1.391 1.385-.964 3.734.823 4.547zm15.125 1.125a4.707 4.707 0 0 1-1.417.844 4.907 4.907 0 0 1-4.516-.51v.51h-2.016V7.161h2v5.479a4.977 4.977 0 0 1 2.401-.839h.359c4.552-.01 6.646 5.656 3.188 8.609zm-.297-3.687a2.805 2.805 0 1 1-5.609 0c.078-3.656 5.526-3.656 5.609 0z"
      style={{ fill: CRUNCHBASE_BLUE, opacity }}
    />
  </svg>
)

export default CrunchbaseLogo
