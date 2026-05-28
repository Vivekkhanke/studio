import * as React from "react"

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        fill="#4285F4"
      />
      <path
        d="M2 17L12 22L22 17L12 12L2 17Z"
        fill="#34A853"
      />
      <path
        d="M2 7L12 12V22L2 17V7Z"
        fill="#FBBC05"
      />
      <path
        d="M22 7L12 12V22L22 17V7Z"
        fill="#EA4335"
      />
    </svg>
  )
}
