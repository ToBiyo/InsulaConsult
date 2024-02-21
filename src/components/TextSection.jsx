import { BackgroundImage } from "./BackgroundImage"
import { AlignLeft } from "../layouts/AlignLeft"
import { TextContent } from "./TextContent"

export const TextSection = ({src, h, heading, text, children, path}) => {
  return (
    <BackgroundImage src={src}>
        <AlignLeft>
            <TextContent  h={h} heading={heading} text={text} path={path}/>
        </AlignLeft>
    </BackgroundImage>
  )
}

