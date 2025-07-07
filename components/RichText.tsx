import { RichText } from "@payloadcms/richtext-lexical/react"
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

type Props = {
    content: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>

export default function RichTextComponent({...props }: Props) {
    return <RichText data={props.content} {...props} />
}