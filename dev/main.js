const ts = require('typescript')
const fs = require('fs')
const { resolve } = require('path')
const { expect } = require('chai')

const transformer = require('../test/hook-config');
// const transformerFactory = require('../lib').default

const printer = ts.createPrinter()

console.log('-----transformer', transformer);

const fixtureDir = fs.readdirSync(resolve(__dirname, '../test', 'fixtures'))
const fixtureSpecialDir = fs.readdirSync(resolve(__dirname, '../test', 'fixtures-special'))

// describe('should compile with less', () => {
//   const transformer = transformerFactory({ style: true })

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)

//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'less', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

// describe('should compile with css', () => {
//   const transformer = transformerFactory({ style: 'css' })

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)

//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'css', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

// describe('should compile with css.web', () => {
//   const transformer = transformerFactory({ style: 'css.web' })

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)

//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'css.web', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

// describe('should compile with custom style path generator', () => {
//   const transformer = transformerFactory({ style: (path) => `${path}/style/index.styl` })

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)

//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'with-custom-style-path-generator', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

// describe('should compile with custom style path generator ignore', () => {
//   const transformer = transformerFactory({
//     style: (path) => {
//       if (path === 'antd/lib/alert') {
//         return false
//       }
//       return `${path}/style/index.styl`
//     },
//   })

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)

//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'with-custom-style-path-generator-ignore', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

// describe('should compile without style', () => {
//   const transformer = transformerFactory()

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)

//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'without-style', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

// describe('should compile lodash library', () => {
//   const transformer = transformerFactory({
//     style: false,
//     libraryName: 'lodash',
//     libraryDirectory: null,
//     camel2DashComponentName: false
//   })

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)

//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'lodash', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

describe('should compile lodash library', () => {
//   const transformer = transformerFactory({
//     style: false,
//     libraryName: 'lodash',
//     libraryDirectory: null,
//     camel2DashComponentName: false
//   })
	console.log('-----transformer should compile custom name library', transformer);

  fixtureSpecialDir.forEach(v => {
    it(`compile ${v}`, () => {
      const sourceCode = fs.readFileSync(resolve(__dirname, '../test/fixtures-special', v), 'utf-8')

      const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

      const result = ts.transform(source, [ transformer ])

      const transformedSourceFile = result.transformed[0]

      const resultCode = printer.printFile(transformedSourceFile)
      fs.writeFileSync(resolve(__dirname, 'actual', 'custom-name', v), resultCode, 'utf-8')

      const expectCode = fs.readFileSync(resolve(__dirname, '../test/expect', 'custom-name', v), 'utf-8')

      expect(resultCode).to.equal(expectCode)

      result.dispose()
    })
  })
})

// return;
// describe('should compile with camel2UnderlineComponentName', () => {
//   const transformer = transformerFactory({
//     style: false,
//     camel2UnderlineComponentName: true
//   })

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)
//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'camel-2-underline', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

// describe('should compile with transformToDefaultImport', () => {
//   const transformer = transformerFactory({
//     libraryDirectory: '../_esm2015/internal/operators',
//     libraryName: 'rxjs/operators',
//     style: false,
//     camel2DashComponentName: false,
//     transformToDefaultImport: false
//   })

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)
//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'transform-to-default-import', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

// describe('should compile with custom libraryDirectory resolver', () => {
//   const transformer = transformerFactory({
//     libraryDirectory: importName => {
//       const stringVec = importName.split(/([A-Z][a-z]+|[0-9]*)/)
//         .filter(s => s.length)
//         .map(s => s.toLocaleLowerCase())

//       return stringVec
//         .reduce((acc, cur, index) => {
//           if (index > 1) {
//             return acc + '-' + cur
//           } else if (index === 1) {
//             return acc + '/' + cur
//           }
//           return acc + cur
//         }, '')
//     },
//     libraryName: 'material-ui/svg-icons',
//     style: false,
//     camel2DashComponentName: false
//   })

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)
//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'custom-library-resolver', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })

// describe('should compile with an array of options', () => {
//   const transformer = transformerFactory([
//     {
//       style: false,
//       libraryName: 'lodash',
//       libraryDirectory: null,
//       camel2DashComponentName: false
//     }, {
//       style: false,
//       libraryName: 'material-ui',
//       libraryDirectory: '',
//       camel2DashComponentName: false
//     }
//   ])

//   fixtureDir.forEach(v => {
//     it(`compile ${v}`, () => {
//       const sourceCode = fs.readFileSync(resolve(__dirname, 'fixtures', v), 'utf-8')

//       const source = ts.createSourceFile(v, sourceCode, ts.ScriptTarget.ES2016, true)

//       const result = ts.transform(source, [ transformer ])

//       const transformedSourceFile = result.transformed[0]

//       const resultCode = printer.printFile(transformedSourceFile)

//       const expectCode = fs.readFileSync(resolve(__dirname, 'expect', 'options-array', v), 'utf-8')

//       expect(resultCode).to.equal(expectCode)

//       result.dispose()
//     })
//   })
// })
