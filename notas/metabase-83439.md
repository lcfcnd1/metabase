estado: LISTO
qué rompía: Un rango del Gauge con Min o Max vacío hacía desaparecer también los rangos completos y dejaba la escala en 0 a 1.
la causa: La validación del arreglo rechazaba todos los rangos antes de que el renderizador filtrara el rango incompleto.
archivos tocados, ruta completa:
- E:\CodexTo\prworld\metabase\frontend\src\metabase\visualizations\visualizations\Gauge\types.ts
- E:\CodexTo\prworld\metabase\frontend\src\metabase\visualizations\visualizations\Gauge\types.unit.spec.ts
qué hace el diff:
Acepta el arreglo para que cada rango pueda validarse individualmente.
Los rangos completos siguen siendo los únicos que se renderizan.
No decide si un límite vacío representa un rango abierto.
test agregado y qué caso cubre: `types.unit.spec.ts` verifica que un arreglo con Max vacío no invalida todos los rangos.
comando exacto que corriste y salida completa, sin editar:
`bun run lint-oxlint -- frontend/src/metabase/visualizations/visualizations/Gauge/types.ts frontend/src/metabase/visualizations/visualizations/Gauge/types.unit.spec.ts`
`bun x jest --runInBand frontend/src/metabase/visualizations/visualizations/Gauge/types.unit.spec.ts`
```text
$ node frontend/lint/scripts/run-oxlint.mjs frontend/src/metabase/visualizations/visualizations/Gauge/types.ts frontend/src/metabase/visualizations/visualizations/Gauge/types.unit.spec.ts
PASS core frontend/src/metabase/visualizations/visualizations/Gauge/types.unit.spec.ts
  Gauge types
    √ accepts arrays containing incomplete segments (241 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.109 s
Ran all test suites matching frontend/src/metabase/visualizations/visualizations/Gauge/types.unit.spec.ts.
```
rama: fix/83439-gauge-empty-bound
PR:
revisión:
qué aprendí: La validación del arreglo no debe descartar rangos válidos porque otro rango todavía está incompleto.

Para alguien que no usa Metabase: una franja con un límite vacío hacía desaparecer las franjas completas del indicador. Pasaba porque el programa rechazaba toda la lista antes de revisar cada franja. El cambio permite conservar las franjas que sí tienen ambos límites.
