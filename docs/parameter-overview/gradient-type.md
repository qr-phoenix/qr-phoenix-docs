---
id: gradient-type
title: Gradient Type
sidebar_label: Gradient Type
sidebar_position: 8
---

**Parameter:** `gradient-type`

**Default:** `vertical`

The `gradient-type` parameter specifies the type/direction of the gradient. Possible values are
- `vertical`
- `horizontal`
- `diagonal`
- `inverse_diagonal`
- `radial`

### Example

GET
```http
/api/qr?data=sample-data&gradient=20,100,80,250,180,10&gradient-type=radial
```
GET
```http
/api/qr?data=sample-data&gradient-type=diagonal
```


### Response(s)
<img class="example-qr" src="/img/examples/gradient-type-a.png" alt="Gradient Type Example" />
<img class="example-qr" src="/img/examples/gradient-type-b.png" alt="Gradient Type Example" />
<hr />