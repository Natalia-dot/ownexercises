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
  }

  export interface FullScreenDivProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {

  }
