export interface CommonComponentProps {
    // actions
    actionType: string;
    url: string;
    // size
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    // border type
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    // shadow and opacity
    boxShadow: string;
    opacity: string;
    // position and x,y
    position: string;
    left: string;
    top: string;
    right: string;
}
export default interface themeInterface {
    [themeType: string]: CommonComponentProps
}
export interface compontListInterface {
    [componType: string]: themeInterface
}

export interface TextComponentProps extends CommonComponentProps {
    text: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string;
    textAlign: string;
    color: string;
    backgroundColor: string;
  }