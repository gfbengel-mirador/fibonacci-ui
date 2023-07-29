'use client'

import { Check, Envelope, Key, File } from '@/assets/icons'
import { Button, TextInput, Checkbox, RadioGroup } from '@/components'

export function FormContent() {
  return (
    <div className="flex w-[450px] flex-wrap justify-between gap-5 rounded-lg border-2 p-3">
      <TextInput.Root>
        <TextInput.Input placeholder="digite o nome" />
      </TextInput.Root>

      <TextInput.Root>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="digite o email" type="email" />
      </TextInput.Root>

      <TextInput.Root>
        <TextInput.Input placeholder="digite a senha" type="password" />
        <TextInput.Icon>
          <Key />
        </TextInput.Icon>
      </TextInput.Root>

      <Checkbox.Root>
        <Checkbox.Checkbox id="check1" disabled />
        <Checkbox.Label htmlFor="check1" disabled>
          Eu aceito os termos de uso
        </Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root>
        <Checkbox.Checkbox id="check4" disabled defaultChecked />
        <Checkbox.Label htmlFor="check4" disabled>
          Eu aceito os termos de uso
        </Checkbox.Label>
        <Checkbox.Icon>
          <File />
        </Checkbox.Icon>
      </Checkbox.Root>

      <Checkbox.Root>
        <Checkbox.Checkbox id="check2" />
        <Checkbox.Label htmlFor="check2">
          Eu aceito os termos de uso
        </Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root>
        <Checkbox.Icon>
          <File />
        </Checkbox.Icon>
        <Checkbox.Checkbox id="check3" defaultChecked />
        <Checkbox.Label htmlFor="check3">
          Eu aceito os termos de uso
        </Checkbox.Label>
      </Checkbox.Root>

      <RadioGroup.Root>
        <RadioGroup.Title>Escolha uma opção</RadioGroup.Title>

        <RadioGroup.Content direction="row">
          <RadioGroup.Item.Root>
            <RadioGroup.Item.Indicator value="teste1" id="teste1" />
            <RadioGroup.Item.Label htmlFor="teste1">
              teste1
            </RadioGroup.Item.Label>
          </RadioGroup.Item.Root>

          <RadioGroup.Item.Root>
            <RadioGroup.Item.Indicator value="teste11" id="teste11" />
            <RadioGroup.Item.Label htmlFor="teste11">
              teste11
            </RadioGroup.Item.Label>
          </RadioGroup.Item.Root>

          <RadioGroup.Item.Root>
            <RadioGroup.Item.Indicator value="teste12" id="teste12" />
            <RadioGroup.Item.Label htmlFor="teste12">
              teste12
            </RadioGroup.Item.Label>
          </RadioGroup.Item.Root>

          <RadioGroup.Item.Root>
            <RadioGroup.Item.Indicator value="teste13" id="teste13" />
            <RadioGroup.Item.Label htmlFor="teste13">
              teste13
            </RadioGroup.Item.Label>
          </RadioGroup.Item.Root>

          <RadioGroup.Item.Root>
            <RadioGroup.Item.Indicator value="teste14" id="teste14" />
            <RadioGroup.Item.Label htmlFor="teste14">
              teste14
            </RadioGroup.Item.Label>
          </RadioGroup.Item.Root>
        </RadioGroup.Content>
      </RadioGroup.Root>

      <Button block variant="gradient">
        Enviar
      </Button>
    </div>
  )
}
