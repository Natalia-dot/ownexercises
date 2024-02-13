export interface FooterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export interface NavProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  $setTheme: React.Dispatch<
    React.SetStateAction<{
      name: string;
      colors: {
        background: string;
        secondaryBackground: string;
        backgroundLight: string;
        backgroundDark: string;
        text: string;
        border: string;
        accent: string;
      };
    }>
  >;
}

export interface IconAnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export interface FlexDivProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    $w?: string;
    $h?: string;
    $align?: string;
    $justify?: string;
    $wrap?: string;
    $small?: boolean;
    $medium?: boolean;
    $row?: boolean;
  }

  export interface FullScreenDivProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {

  }

  export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  {
    $nav?: string;
    $small?: boolean;
  }

  export interface WorkCardProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  
}

export interface ProjectCardProps extends React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
> {
  title: string;
  desc: string;
  img: string;
  alt: string;
}