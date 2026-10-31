estado: LISTO
qué rompía: Las opciones de un filtro single-select no recibían foco al usar Tab ni podían seleccionarse sin mouse.
la causa: Las opciones eran bloques visuales sin foco de teclado, semántica de opción ni manejo de teclas de activación.
archivos tocados, ruta completa:
- E:\CodexTo\prworld\metabase\frontend\src\metabase\parameters\components\widgets\ParameterFieldWidget\FieldValuesWidget\SingleSelectListField\SingleSelectListField.tsx
- E:\CodexTo\prworld\metabase\frontend\src\metabase\parameters\components\widgets\ParameterFieldWidget\FieldValuesWidget\SingleSelectListField\SingleSelectListField.unit.spec.tsx
qué hace el diff, tres líneas máximo:
Expone el contenedor como listbox y cada valor como una opción enfocables.
Enter y Space seleccionan la opción enfocada.
Conserva la selección existente por clic.
test agregado y qué caso cubre: El test nuevo verifica que Tab enfoca la primera opción y Enter la selecciona; los cinco tests existentes también pasan.
comando exacto que corriste y salida completa, sin editar:
`bun run lint-oxlint -- frontend/src/metabase/parameters/components/widgets/ParameterFieldWidget/FieldValuesWidget/SingleSelectListField/SingleSelectListField.tsx frontend/src/metabase/parameters/components/widgets/ParameterFieldWidget/FieldValuesWidget/SingleSelectListField/SingleSelectListField.unit.spec.tsx`
`bun x jest --runInBand frontend/src/metabase/parameters/components/widgets/ParameterFieldWidget/FieldValuesWidget/SingleSelectListField/SingleSelectListField.unit.spec.tsx`
```text
$ node frontend/lint/scripts/run-oxlint.mjs frontend/src/metabase/parameters/components/widgets/ParameterFieldWidget/FieldValuesWidget/SingleSelectListField/SingleSelectListField.tsx frontend/src/metabase/parameters/components/widgets/ParameterFieldWidget/FieldValuesWidget/SingleSelectListField/SingleSelectListField.unit.spec.tsx
PASS core frontend/src/metabase/parameters/components/widgets/ParameterFieldWidget/FieldValuesWidget/SingleSelectListField/SingleSelectListField.unit.spec.tsx (12.268 s)
  SingleSelectListField
    √ displays search input (9089 ms)
    √ displays options (22 ms)
    √ selects an option with the keyboard (173 ms)
    √ should not create duplicate options for non-string values (17 ms)
    √ should not create duplicate options when searching with non-string values (264 ms)
    √ should not create duplicate options on pressing Enter for non-string values (174 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        13.617 s
Ran all test suites matching frontend/src/metabase/parameters/components/widgets/ParameterFieldWidget/FieldValuesWidget/SingleSelectListField/SingleSelectListField.unit.spec.tsx.
```
rama: fix/83484-single-select-keyboard
PR:
revisión:
qué aprendí: Un valor que parece una opción necesita foco y activación de teclado explícitos para ser accesible.

Para alguien que no usa Metabase: el teclado saltaba por encima de los valores de un filtro de una sola opción. Pasaba porque esos valores solo respondían al clic. El cambio permite llegar a cada valor con Tab y elegirlo con Enter o Space.
