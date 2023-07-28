'use client';

import { Check, Envelope, Key,File } from "@/assets/icons";
import { Button, TextInput, Checkbox } from "@/components";

export function FormContent(){
  return (
    <div className="flex w-[450px] flex-wrap justify-between gap-5 border-2 rounded-lg p-3">
        <TextInput.Root>
          <TextInput.Input placeholder="digite o nome" />
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input placeholder="digite o email" type='email' />
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Input placeholder="digite a senha" type="password" />
          <TextInput.Icon>
            <Key />
          </TextInput.Icon>
        </TextInput.Root>


        <Checkbox.Root>
          <Checkbox.Checkbox id='check1' disabled />
          <Checkbox.Label htmlFor='check1' disabled>Eu aceito os termos de uso</Checkbox.Label>
        </Checkbox.Root>


        <Checkbox.Root>
          <Checkbox.Checkbox id='check4' disabled defaultChecked />
          <Checkbox.Label htmlFor='check4'  disabled>Eu aceito os termos de uso</Checkbox.Label>
          <Checkbox.Icon><File /></Checkbox.Icon>
        </Checkbox.Root>

        <Checkbox.Root>
          <Checkbox.Checkbox id='check2' />
          <Checkbox.Label htmlFor='check2'>Eu aceito os termos de uso</Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root>
          <Checkbox.Icon><File /></Checkbox.Icon>             
          <Checkbox.Checkbox id='check3' defaultChecked />
          <Checkbox.Label htmlFor='check3'>Eu aceito os termos de uso</Checkbox.Label>
        </Checkbox.Root>



        <Button block variant="gradient">Enviar</Button>
      </div>
  )
}