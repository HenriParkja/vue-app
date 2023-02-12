import type { ITextField } from '@/components/text-field/types'

export interface ISingleInput {
    elementId: string | null,
    value: string
}

export interface IInputModalData {
    textFields: ITextField[],
    textFieldData: Array<ISingleInput>
}
