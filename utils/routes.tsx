import React from "react";
import flatten from "lodash/flatten";
import find from "lodash/find";

export const categorizedRoutes = [
  {
    category: "SVG",
    content: [
      {
        label: "to JSX",
        path: "/",
        packageName: "@svgr/core",
        packageUrl: "https://github.com/smooth-code/svgr",
        keywords:
          "在线代码转换器,代码转换工具,json工具,xml工具,GraphQL工具,html工具,svg工具",
        title:
          "在线代码转换工具，快速高效的网页转换工具，将为您节省大量时间，云库工具。"
      },
      {
        label: "to React Native",
        path: "/svg-to-react-native",
        packageName: "@svgr/core",
        packageUrl: "https://github.com/smooth-code/svgr",
        title: "SVG转React Native | 云库工具 - 无缝集成SVG至React Native项目",
        keywords:
          "SVG to React Native,SVG转React Native,SVG转换器,React Native开发工具,移动应用开发,图形集成,代码转换,云库工具",
        desc:
          "使用云库工具将SVG文件轻松转换为React Native组件。我们的SVG to React Native转换器帮助开发者和设计师简化项目流程，实现无缝的图形集成，提高移动应用开发效率。"
      }
    ]
  },
  {
    category: "HTML",
    content: [
      {
        label: "to JSX",
        path: "/html-to-jsx",
        title: "HTML转JSX工具 | 云库工具 - 提升React开发效率",
        keywords:
          "HTML转JSX, HTML到JSX, React开发工具, JSX代码转换, 提升开发效率, 代码转换器, 前端开发, 云库工具",
        desc:
          "云库工具的HTML转JSX功能为React开发者提供了一个快速、高效的转换工具，帮助您轻松将HTML代码转换成JSX，优化开发流程，提升开发效率，是每位React开发者的得力助手。"
      },
      {
        label: "to Pug",
        path: "/html-to-pug",
        packageName: "html2pug",
        packageUrl: "https://github.com/izolate/html2pug",
        title: "HTML转Pug在线工具 | 云库工具 - 简化前端模板开发",
        keywords:
          "HTML转Pug, HTML转换Pug, 在线转换工具, 前端开发, Pug模板, 提升开发效率, 云库工具",
        desc:
          "云库工具提供的HTML转Pug在线工具，助力开发者快速将标准HTML代码转化为Pug模板。界面友好，操作简便，是提高前端开发效率和项目质量的理想选择。"
      }
    ]
  },
  {
    category: "JSON",
    content: [
      {
        label: "to React PropTypes",
        path: "/json-to-proptypes",
        title: "JSON转React PropTypes生成器 | 云库工具 - 提升组件开发效率",
        keywords:
          "JSON转React PropTypes, PropTypes生成器, React组件开发, 在线工具, 组件属性类型校验, 云库工具, React开发, 提高代码质量",
        desc:
          "JSON转React PropTypes, PropTypes生成器, React组件开发, 在线工具, 组件属性类型校验, 云库工具, React开发, 提高代码质量"
      },
      {
        label: "to Flow",
        path: "/json-to-flow",
        title: "JSON转Flow类型定义工具 | 云库工具 - 前端类型检查更简单",
        keywords:
          "JSON转Flow, Flow类型定义, 前端类型检查, 在线转换工具, 提升开发效率, 代码健壮性, 云库工具",
        desc:
          "云库工具的JSON转Flow工具帮助前端开发者快速将JSON对象转换为Flow的类型定义，简化类型检查流程，提升代码健壮性和开发效率。界面友好，使用便捷。"
      },
      {
        label: "to GraphQL",
        path: "/json-to-graphql",
        packageName: "@walmartlabs/json-to-simple-graphql-schema",
        packageUrl:
          "https://github.com/walmartlabs/json-to-simple-graphql-schema",
        title: "JSON转GraphQL架构工具 | 云库工具 - 简化API开发",
        keywords:
          "JSON转GraphQL, GraphQL架构生成, API开发工具, 在线转换工具, GraphQL API设计, 云库工具, 提高开发效率",
        desc:
          "借助云库工具将JSON格式快速转换为GraphQL架构，简化GraphQL API的开发流程。提供简洁易懂的界面，帮助开发者提高工作效率，优化API设计。"
      },
      {
        label: "to TypeScript",
        path: "/json-to-typescript",
        packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
        packageName: "json_typegen_wasm",
        title: "JSON转TypeScript定义转换器 | 云库工具 - 高效开发助手",
        keywords:
          "JSON转TypeScript, TypeScript定义生成, 快速转换工具, 在线开发助手, 提高代码质量, 云库工具, 编程效率提升",
        desc:
          "云库工具提供一站式JSON转TypeScript定义服务，帮助开发者快速将JSON数据转换为TypeScript接口，简化开发流程，提高代码质量和开发效率。界面操作简便，转换准确高效。"
      },
      {
        label: "to MobX-State-Tree Model",
        path: "/json-to-mobx-state-tree",
        title: "JSON转MobX-State-Tree模型工具 | 云库工具 - 状态管理优化",
        keywords:
          "JSON转MST模型, MobX-State-Tree状态管理, 前端开发工具, 代码结构简化, 在线转换工具, 云库工具, 提高开发效率",
        desc:
          "云库工具提供JSON至MobX-State-Tree模型的转换服务，旨在帮助开发者轻松生成MST模型，优化前端状态管理流程。提高开发效率，简化代码结构。"
      },
      {
        label: "to Sarcastic",
        path: "/json-to-sarcastic",
        packageName: "transform-json-types",
        packageUrl: "https://github.com/transform-it/transform-json-types",
        title: "JSON转换为讽刺风格文本工具 | 云库工具 - 创意写作助手",
        keywords:
          "JSON转换讽刺文本, 创意写作工具, 编剧助手, 文本转换器, 创新写作灵感, 云库工具, 营销内容创作",
        desc:
          "云库工具的JSON to Sarcastic功能，能将标准的JSON文本转换成富有讽刺意味的文本，为创意写作提供新的灵感源泉。适合编剧、作家及营销人员使用。"
      },
      {
        label: "to io-ts",
        path: "/json-to-io-ts",
        packageName: "transform-json-types",
        packageUrl: "https://github.com/transform-it/transform-json-types",
        title: "JSON转io-ts类型校验器 | 云库工具 - 前端类型安全保障",
        keywords:
          "JSON转io-ts, 类型校验器生成, 数据类型安全, 前端开发工具, 代码质量提升, 云库工具, 自动化开发",
        desc:
          "云库工具为前端开发者提供JSON到io-ts的转换功能，帮助自动生成类型校验器，确保数据类型的准确性和应用的安全性。简化开发流程，提升代码质量。"
      },
      {
        label: "to Rust Serde",
        path: "/json-to-rust-serde",
        title: "JSON转Rust Serde代码 | 云库工具 - 高效Rust编程辅助",
        keywords:
          "JSON转Rust代码, Rust Serde生成器, Rust编程工具, 自动化代码生成, 云库工具, 数据模型构建, Rust后端开发",
        desc:
          "云库工具针对Rust开发者提供的JSON至Rust Serde代码转换功能，帮助您快速生成Rust数据模型，简化后端开发流程，让Rust编程更加高效。"
      },
      {
        label: "to Mongoose Schema",
        path: "/json-to-mongoose",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema",
        title: "JSON转Mongoose模式工具 | 云库工具 - Node.js数据库模型构建助手",
        keywords:
          "JSON转Mongoose, Mongoose模式生成, Node.js数据库构建, MongoDB模式设计, 云库工具, 自动化模式转换, 数据库模型优化",
        desc:
          "云库工具提供的JSON至Mongoose Schema转换功能，帮助Node.js开发者快速生成数据库模型。此工具旨在简化MongoDB数据库的模式设计，提高开发效率。"
      },
      {
        label: "to Big Query Schema",
        path: "/json-to-big-query",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema",
        title: "JSON转BigQuery模式工具 | 云库工具 - 数据仓库模式构建专家",
        keywords:
          "JSON转BigQuery, BigQuery模式生成, 数据仓库模式构建, 云库工具, 数据迁移工具, 数据仓库优化, 自动化数据处理",
        desc:
          "云库工具提供的JSON到BigQuery Schema的转换功能，助力数据工程师快速将JSON数据格式化为BigQuery兼容模式，简化数据迁移与仓库构建过程，提升数据处理效率。"
      },
      {
        label: "to MySQL",
        path: "/json-to-mysql",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema",
        title: "JSON转MySQL转换工具 | 云库工具 - 数据库设计简化专家",
        keywords:
          "JSON转MySQL, 数据库转换工具, 数据库设计简化, 云库工具, MySQL数据构建, 自动化数据库设计, 数据整合工具",
        desc:
          "借助云库工具的JSON到MySQL转换功能，快速将JSON格式数据转化成MySQL表结构。此工具专为开发者设计，以简化数据库设计流程，提高数据整合和开发效率。"
      },
      {
        label: "to Scala Case Class",
        path: "/json-to-scala-case-class",
        title: "JSON转Scala案例类工具 | 云库工具 - Scala开发加速器",
        keywords:
          "JSON转Scala案例类, Scala数据模型构建, 云库工具, Scala开发工具, 自动化代码生成, 数据模型优化, 编程效率提升",
        desc:
          "云库工具提供的JSON至Scala案例类转换服务，旨在帮助Scala开发者快速从JSON数据生成案例类，简化数据模型构建过程，提升开发效率。"
      },
      {
        label: "to Go Struct",
        path: "/json-to-go",
        packageName: "json-to-go",
        packageUrl: "https://github.com/mholt/json-to-go",
        title: "JSON转Go结构工具 | 云库工具 - Go语言数据转换优化专家",
        keywords:
          "JSON转Go结构, Go结构体生成器, Go语言开发工具, 云库工具, JSON数据处理, 自动化Go编码, Go数据映射",
        desc:
          "云库工具提供的JSON到Go结构的转换服务，帮助开发者快速准确地将JSON数据映射到Go语言的结构体中。这一工具旨在优化Go语言开发流程，提高编码效率与数据处理能力。"
      },
      {
        label: "to Go Bson",
        path: "/json-to-go-bson",
        title: "JSON转Go Bson结构体生成器 | 云库工具 - 提高Go语言开发效率",
        keywords:
          "JSON转Go Bson, Go Struct生成器, Go语言开发工具, 云库工具, Bson结构体, Go后端开发, MongoDB结构定义",
        desc:
          "使用云库工具将JSON格式快速转换为Go语言的Bson结构体，为MongoDB等NoSQL数据库操作提供极大便利，加速Go后端开发流程，提高工作效率。"
      },
      {
        label: "to YAML",
        path: "/json-to-yaml",
        packageName: "json2yaml",
        packageUrl: "https://github.com/jeffsu/json2yaml",
        title: "JSON转YAML在线转换器 | 云库工具 - 编程语言数据格式转换专家",
        keywords:
          "JSON转YAML, YAML生成器, 在线数据格式转换, 云库工具, JSON配置转换, 自动化YAML生成, 编程语言工具",
        desc:
          "云库工具提供的JSON至YAML在线转换服务，旨在帮助开发者和编程爱好者快速、无缝地将JSON数据格式转换为YAML格式。利用此工具可简化配置管理和文档编写过程。"
      },
      {
        label: "to JSDoc",
        path: "/json-to-jsdoc",
        title: "JSON转JSDoc工具 | 云库工具 - 提升JavaScript代码文档化效率",
        keywords:
          "JSON转JSDoc, JSDoc生成器, JavaScript文档化工具, 云库工具, 自动化代码注释, 开发者工具, 提升代码质量",
        desc:
          "云库工具为JavaScript开发者提供JSON转JSDoc的在线转换服务，旨在帮助开发者从JSON格式的数据自动生成JSDoc注释，极大提升代码的可读性与维护性。"
      },
      {
        label: "to Kotlin",
        path: "/json-to-kotlin",
        packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
        packageName: "json_typegen_wasm",
        title:
          "JSON转Kotlin数据类工具 | 云库工具 - 一站式Kotlin开发效率提升平台",
        keywords:
          "JSON转Kotlin, Kotlin数据类生成器, Kotlin开发工具, 云库工具, JSON数据模型, 移动开发, 服务器端开发",
        desc:
          "云库工具提供JSON至Kotlin数据类的在线转换服务，帮助Kotlin开发者快速生成准确的数据模型类，提升移动和服务器端开发效率。"
      },
      {
        label: "to Java",
        path: "/json-to-java",
        packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
        packageName: "json_typegen_wasm",
        title: "高效的JSON转Java对象工具 | 云库工具 - Java开发者的强大助手",
        keywords:
          "JSON转Java, Java对象生成器, 在线转换工具, 云库工具, Java数据处理, 自动化Java类生成, Java开发辅助",
        desc:
          "云库工具提供在线JSON至Java对象的转换服务，帮助Java开发者快速准确地转换JSON数据为Java类，简化数据处理过程，提升开发效率。"
      },
      {
        label: "to JSON Schema",
        path: "/json-to-json-schema",
        packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
        packageName: "json_typegen_wasm",
        title: "在线JSON转JSON Schema工具 | 云库工具 - 高效数据验证解决方案",
        keywords:
          "JSON转JSON Schema, 在线JSON Schema生成, 数据验证工具, 云库工具, 开发效率提升, 前后端开发, API数据结构设计",
        desc:
          "云库工具的JSON至JSON Schema转换器，助您轻松生成JSON Schema，为JSON数据结构提供验证模式，优化前后端开发流程。"
      },
      {
        label: "to TOML",
        path: "/json-to-toml",
        packageUrl: "https://www.npmjs.com/package/@iarna/toml",
        packageName: "@iarna/toml",
        title: "在线JSON转TOML工具 | 云库工具 - 轻松转换JSON格式至TOML",
        keywords:
          "JSON转TOML, 在线转换工具, TOML格式生成, JSON格式转换, 云库工具, 配置文件管理, 提高开发效率",
        desc:
          "云库工具提供高效的在线JSON转TOML服务，助您轻松将JSON格式文件转换为TOML格式，优化配置文件管理，提高开发效率和项目配置的便捷性。"
      },
      {
        label: "to Zod Schema",
        path: "/json-to-zod",
        packageUrl: "https://www.npmjs.com/package/json-to-zod",
        packageName: "json-to-zod",
        title: "在线JSON转Zod Schema工具 | 云库工具 - 助力类型安全的开发体验",
        keywords:
          "JSON转Zod Schema, Zod Schema生成器, 类型安全验证, 云库工具, 数据验证工具, 前后端开发, 提升开发效率",
        desc:
          "云库工具提供JSON到Zod Schema的在线转换服务，简化数据验证流程，确保前后端数据类型安全，提升开发效率和质量。"
      }
    ]
  },
  {
    category: "JSON Schema",
    content: [
      {
        label: "to TypeScript",
        path: "/json-schema-to-typescript",
        packageName: "json-schema-to-typescript",
        packageUrl: "https://github.com/bcherny/json-schema-to-typescript",
        title: "在线JSON Schema转TypeScript工具 | 云库工具 - 代码生成更简单",
        keywords:
          "JSON Schema转TypeScript, 在线代码生成工具, TypeScript类型定义, 云库工具, 编程效率提升, 开发工具",
        desc:
          "云库工具提供专业的JSON Schema转TypeScript服务，帮助开发者快速生成准确的TypeScript类型定义，简化开发流程，提升开发效率。"
      },
      {
        label: "to OpenAPI Schema",
        path: "json-schema-to-openapi-schema",
        packageName: "json-schema-to-openapi-schema",
        packageUrl:
          "https://github.com/openapi-contrib/json-schema-to-openapi-schema",
        title:
          "在线JSON Schema转OpenAPI Schema工具 | 云库工具 - 接口定义转换专家",
        keywords:
          "JSON Schema转OpenAPI Schema, 接口定义转换, OpenAPI文档生成, JSON Schema, OpenAPI Schema, 云库工具, 提高开发效率, API文档准确性",
        desc:
          "云库工具提供在线JSON Schema转OpenAPI Schema服务，帮助开发者快速转换接口定义，确保API文档的准确性和一致性，提高开发效率。"
      },
      {
        label: "to Protobuf",
        path: "json-schema-to-protobuf",
        packageName: "jsonschema-protobuf",
        packageUrl: "https://github.com/okdistribute/jsonschema-protobuf",
        title: "在线JSON Schema转Protobuf工具 | 云库工具 - 构建高效通信协议",
        keywords:
          "JSON Schema转Protobuf, Protobuf定义生成, 高效通信协议, 数据结构优化, 云库工具, 系统性能提升",
        desc:
          "云库工具提供在线JSON Schema转Protobuf服务，助力开发者轻松构建高效的通信协议，优化数据结构定义，提升系统性能。"
      },
      {
        label: "to Zod Schema",
        path: "json-schema-to-zod",
        packageName: "json-schema-to-zod",
        packageUrl: "https://www.npmjs.com/package/json-schema-to-zod",
        title: "在线JSON Schema转Zod Schema工具 | 云库工具 - 高效代码验证工具",
        keywords:
          "JSON Schema转Zod Schema, 在线生成Zod Schema, 数据验证工具, 类型安全, 云库工具, 代码验证, 开发效率提升, 数据验证简化",
        desc:
          "云库工具提供在线JSON Schema转Zod Schema服务，助力开发者快速生成类型安全的验证代码，简化数据验证流程，加速开发项目的进度。"
      }
    ]
  },
  {
    category: "CSS",
    content: [
      {
        label: "to JS Objects",
        path: "/css-to-js",
        packageName: "transform-css-to-js",
        packageUrl: "https://github.com/transform-it/transform-css-to-js",
        title: "在线CSS转JS Objects工具 | 云库工具 - 前端开发助手",
        keywords:
          "CSS转JS Objects, 前端开发, CSS代码转换, JavaScript对象, 云库工具, 编码效率提升",
        desc:
          "云库工具提供在线CSS转JS Objects服务，帮助前端开发者轻松将CSS代码转换为JavaScript对象，优化开发流程，提高编码效率。"
      },
      {
        label: "to template literal",
        path: "/object-styles-to-template-literal",
        packageUrl:
          "https://github.com/satya164/babel-plugin-object-styles-to-template",
        packageName: "babel-plugin-object-styles-to-template",
        title: "在线CSS转模板字符串工具 | 云库工具 - 前端样式创新",
        keywords:
          "CSS转模板字符串, CSS嵌入JavaScript, 前端样式创新, 云库工具, 样式编码改进, 前端开发效率",
        desc:
          "云库工具提供在线CSS转模板字符串服务，帮助前端开发者轻松实现CSS在JavaScript中的嵌入应用，创新样式编码方式，提升开发效率。"
      },
      {
        label: "to TailwindCSS",
        path: "/css-to-tailwind",
        packageUrl: "https://github.com/Jackardios/css-to-tailwindcss",
        packageName: "css-to-tailwindcss",
        title: "在线CSS转TailwindCSS工具 | 云库工具 - 前端工程化利器",
        keywords:
          "CSS转TailwindCSS, 在线转换工具, 前端开发工具, 云库工具, 代码优化, 设计效率提升, 前端工程化",
        desc:
          "云库工具提供在线CSS转TailwindCSS服务，帮助前端开发者高效实现CSS到TailwindCSS的转换，优化项目代码结构，提升开发与设计效率。"
      }
    ]
  },
  {
    category: "JavaScript",
    content: [
      {
        label: "to JSON",
        path: "/js-object-to-json",
        title: "在线JavaScript转JSON工具 | 云库工具 - 数据格式转换专家",
        keywords:
          "JavaScript转JSON, 在线工具, 数据格式转换, 云库工具, 开发效率, 简化数据处理",
        desc:
          "云库工具提供在线JavaScript转JSON服务，轻松帮助开发者将JavaScript对象转换为标准JSON格式，简化数据处理过程，提高开发效率。"
      },
      {
        label: "to Typescript",
        path: "/js-object-to-typescript",
        title: "在线JavaScript转TypeScript工具 | 云库工具 - 前端开发效率提升",
        keywords:
          "JavaScript转TypeScript, JS转TS在线工具, 提高代码质量, 开发效率提升, 前端开发, 云库工具",
        desc:
          "云库工具提供在线JavaScript转TypeScript服务，快速准确地帮助开发者将JS代码转换为TS，提高代码质量和开发效率，是前端开发者的理想选择。"
      }
    ]
  },
  {
    category: "GraphQL",
    content: [
      {
        label: "to TypeScript",
        path: "/graphql-to-typescript",
        title: "在线GraphQL转TypeScript工具 | 云库工具 - 增强API开发体验",
        keywords:
          "GraphQL转TypeScript, 在线转换工具, API开发, 自动生成TypeScript定义, 云库工具, 提升开发质量, 开发效率",
        desc:
          "云库工具提供在线GraphQL到TypeScript的转换服务，帮助开发者自动化生成强类型的TypeScript定义，从而优化API开发流程，提升开发质量和效率。"
      },
      {
        label: "to Flow",
        path: "/graphql-to-flow",
        title: "在线GraphQL转Flow工具 | 云库工具 - 提升前端类型安全性",
        keywords:
          "GraphQL转Flow,在线转换服务,Flow类型声明,类型安全,前端开发工具,云库工具,代码维护",
        desc:
          "云库工具提供在线GraphQL到Flow类型定义转换服务，帮助前端工程师简化开发流程，快捷生成Flow类型声明，提高项目代码的类型安全和维护性。"
      },
      {
        label: "to JAVA",
        path: "/graphql-to-java",
        title: "在线GraphQL转JAVA代码工具 | 云库工具 - 提升后端开发效率",
        keywords:
          "GraphQL转JAVA, 在线转换工具, 后端开发, 自动生成JAVA类, 云库工具, 提升开发效率, 项目质量",
        desc:
          "云库工具提供在线GraphQL到JAVA代码的转换服务，助力开发者快速将GraphQL查询转换为JAVA类，简化后端开发流程，提高开发效率和项目质量。"
      },
      {
        label: "to Resolvers Signature",
        path: "/graphql-to-resolvers-signature",
        title:
          "在线GraphQL转Resolvers签名工具 | 云库工具 - 优化GraphQL开发流程",
        keywords:
          "GraphQL转Resolvers签名,自动生成类型签名,GraphQL开发工具,优化后端开发流程,云库工具,提高开发效率,代码质量",
        desc:
          "云库工具提供GraphQL到Resolvers签名的在线转换服务，旨在帮助开发者自动生成Resolver的类型签名，优化GraphQL的后端开发流程，提升开发效率与代码质量。"
      },

      {
        label: "to Introspection JSON",
        path: "/graphql-to-introspection-json",
        title:
          "在线GraphQL转Introspection JSON工具 | 云库工具 - GraphQL架构解析优化",
        keywords:
          "GraphQL转Introspection JSON, GraphQL架构解析, 在线转换工具, API开发优化, 云库工具, GraphQL API分析",
        desc:
          "云库工具提供面向GraphQL架构的Introspection JSON在线转换服务，助力开发者快速理解和分析GraphQL API结构，优化API开发和维护流程。"
      },

      {
        label: "to Schema AST",
        path: "/graphql-to-schema-ast",
        title: "在线GraphQL转Schema AST工具 | 云库工具 - 彻底理解GraphQL架构",
        keywords:
          "GraphQL转Schema AST, 抽象语法树转换, GraphQL架构分析, 在线开发工具, 优化API设计, 云库工具",
        desc:
          "云库工具提供GraphQL查询到Schema AST(抽象语法树)的在线转换服务，帮助开发者深入分析和优化GraphQL架构，提升API设计和开发效率。"
      },
      {
        label: "to Fragment Matcher",
        path: "/graphql-to-fragment-matcher",
        title:
          "在线GraphQL转Fragment Matcher工具 | 云库工具 - 精确GraphQL片段匹配",
        keywords:
          "GraphQL转Fragment Matcher, GraphQL片段匹配, 客户端数据优化, 在线GraphQL工具, 云库工具, 提升应用性能",
        desc:
          "云库工具提供GraphQL查询到Fragment Matcher的在线转换服务，助力开发者精确匹配GraphQL片段，优化客户端数据存储，提升应用性能。"
      },
      {
        label: "to Components",
        path: "/graphql-to-components",
        title: "在线GraphQL转Components工具 | 云库工具 - 高效API组件生成",
        keywords:
          "GraphQL转Components, 在线转换GraphQL, 生成前端组件, API代码优化, 云库工具, GraphQL查询工具",
        desc:
          "云库工具提供GraphQL查询到组件的在线转换服务，助力开发者更快速地将GraphQL查询转化为可重用的前端组件代码，提升开发效率与可维护性。"
      },
      {
        label: "to TypeScript MongoDB",
        path: "/graphql-to-typescript-mongodb",
        title:
          "GraphQL转TypeScript MongoDB在线工具 | 云库工具 - 前端数据库模型快速生成",
        keywords:
          "GraphQL转TypeScript, MongoDB模型生成, 在线代码转换工具, 自动化数据库设计, 云库工具, 开发效率提升",
        desc:
          "云库工具专为开发者打造的GraphQL至TypeScript MongoDB模型转换服务，实现一键生成前端代码，提升数据库设计效率与开发速度。"
      }
    ].map(x => ({
      ...x,
      packageUrl: "https://github.com/dotansimha/graphql-code-generator",
      packageName: "graphql-code-generator"
    }))
  },
  {
    category: "JSON-LD",
    content: [
      {
        label: "to N-Quads",
        path: "/jsonld-to-nquads",
        title: "JSON-LD转N-Quads在线工具 | 云库工具 - 网络数据格式转换优化",
        keywords:
          "JSON-LD转N-Quads, 在线数据转换工具, 网络数据处理, 数据格式转换, 云库工具, 数据处理效率",
        desc:
          "利用云库工具将JSON-LD格式快速转换成N-Quads格式，帮助开发者和数据科学家优化和处理复杂的网络数据，提升数据处理效率。"
      },
      {
        label: "to Expanded",
        path: "/jsonld-to-expanded",
        title: "在线JSON-LD扩展工具 | 云库工具 - 数据结构优化转换",
        keywords:
          "JSON-LD扩展, JSON-LD转换工具, 在线数据格式转换, 数据结构优化, 云库工具, 搜索引擎优化",
        desc:
          "云库工具提供在线JSON-LD扩展转换服务，帮助开发者轻松将JSON-LD格式转化为扩展形式，优化数据结构，提高搜索引擎的数据理解与索引效率。"
      },
      {
        label: "to Compacted",
        path: "/jsonld-to-compacted",
        title: "在线JSON-LD压缩工具 | 云库工具 - 高效数据格式转换",
        keywords:
          "JSON-LD压缩, 数据格式转换, 在线工具, 数据管理优化, 云库工具, 提高数据处理速度",
        desc:
          "云库工具提供快速将JSON-LD数据格式压缩为紧凑型版本的在线服务，帮助开发者简化数据管理，提升数据处理与传输效率。"
      },
      {
        label: "to Flattened",
        path: "/jsonld-to-flattened",
        title: "在线JSON-LD展平工具 | 云库工具 - 简化数据结构和优化处理",
        keywords:
          "JSON-LD展平, JSON-LD数据处理, 扁平化数据结构, 在线转换工具, 云库工具, 数据解析优化",
        desc:
          "云库工具提供在线JSON-LD展平服务，助您将JSON-LD格式数据展为扁平化结构，简化数据处理流程，提升数据解析与应用的效率。"
      },
      {
        label: "to Framed",
        path: "/jsonld-to-framed",
        title: "在线JSON-LD构架转换工具 | 云库工具 - 结构化数据处理",
        keywords:
          "JSON-LD构架, JSON-LD转换, 在线JSON工具, 结构化数据处理, 数据格式化, 云库工具",
        desc:
          "云库工具提供在线JSON-LD构架转换功能，帮助开发者和数据科学家将JSON-LD数据根据特定构架进行格式化，优化数据解读和利用效率。"
      },
      {
        label: "to Normalized",
        path: "jsonld-to-normalized",
        title: "在线JSON-LD规范化工具 | 云库工具 - 数据整理与优化方案",
        keywords:
          "JSON-LD规范化, 数据整理工具, 在线JSON转换, 数据优化, 云库工具, 提高效率",
        desc:
          "云库工具提供在线JSON-LD规范化服务，助力开发者和数据分析师将复杂的JSON-LD数据转换成规范化格式，简化数据处理，提升工作效率。"
      }
    ].map(x => ({
      ...x,
      packageName: "jsonld",
      packageUrl: "https://github.com/digitalbazaar/jsonld.js"
    }))
  },
  {
    category: "TypeScript",
    content: [
      {
        label: "to Flow",
        path: "/typescript-to-flow",
        packageName: "flowgen",
        packageUrl: "https://github.com/joarwilk/flowgen",
        title: "在线TypeScript转Flow工具 | 云库工具 - 前端代码转换专家",
        keywords:
          "TypeScript转Flow, 前端开发工具, 代码转换器, 类型检查, 在线工具, 云库工具",
        desc:
          "云库工具提供在线TypeScript转Flow工具，协助前端开发者高效转换代码，确保类型检查的精准匹配，优化开发流程。"
      },
      {
        label: "to TypeScript Declaration",
        path: "/typescript-to-typescript-declaration",
        title: "在线TypeScript声明文件生成工具 | 云库工具 - 自动化代码辅助平台",
        keywords:
          "TypeScript声明文件, .d.ts生成, TypeScript工具, 代码自动化, 在线工具, 云库工具",
        desc:
          "云库工具提供在线生成TypeScript声明文件（.d.ts）的功能，帮助开发者自动化处理代码，提高项目开发效率和代码维护性。"
      },
      {
        label: "to JSON Schema",
        path: "/typescript-to-json-schema",
        packageName: "ts-json-schema-generator",
        packageUrl: "https://github.com/vega/ts-json-schema-generator",
        title: "在线TypeScript转JSON Schema工具 | 云库工具 - 代码架构优化利器",
        keywords:
          "TypeScript转JSON Schema, 代码转换在线工具, 项目架构优化, 开发效率提升, 数据校验, 云库工具",
        desc:
          "云库工具提供TypeScript代码转换为JSON Schema的在线服务，简化并优化你的项目架构，提升开发效率和数据校验的可靠性。"
      },
      {
        label: "to plain JavaScript",
        path: "/typescript-to-javascript",
        title:
          "在线TypeScript转纯JavaScript工具 | 云库工具 - 前端开发高效转换平台",
        keywords:
          "TypeScript转JavaScript, TS转JS在线工具, 前端代码转换, 开发效率提升, 代码兼容性, 云库工具",
        desc:
          "云库工具的TypeScript转纯JavaScript在线工具帮助开发者快速将TS代码转换为JS，简化开发流程，提升项目兼容性和执行效率。"
      },
      {
        label: "to Zod Schema",
        path: "/typescript-to-zod",
        packageName: "ts-to-zod",
        packageUrl: "https://www.npmjs.com/package/ts-to-zod",
        title: "在线TypeScript转Zod模式工具 | 云库工具 - 前端数据校验简化专家",
        keywords:
          "TypeScript转Zod, TypeScript校验模式, Zod模式生成, 前端工具, 数据校验解决方案, 云库工具",
        desc:
          "云库工具提供一键将TypeScript接口转换为Zod模式的在线服务，为开发者提供便捷的数据校验解决方案，提高代码质量和开发效率。"
      }
    ]
  },
  {
    category: "Flow",
    iconName: "",
    content: [
      {
        label: "to TypeScript",
        path: "/flow-to-typescript",
        title: "在线Flow转TypeScript工具 | 云库工具 - 最佳前端代码转换助手",
        keywords:
          "Flow转TypeScript, Flow代码转换, 前端代码转换工具, 提高代码质量, 代码转换在线服务, 云库工具",
        desc:
          "云库工具提供简易的在线服务，将Flow代码快速转换为TypeScript，助力开发者提升代码质量和开发流程的高效性。"
      },
      {
        label: "to TypeScript Declaration",
        path: "/flow-to-typescript-declaration",
        title: "在线Flow转TypeScript声明工具 | 云库工具 - 前端类型转换专家",
        keywords:
          "Flow转TypeScript声明, Flow到TS声明, 类型安全工具, 前端开发, 代码一致性, 云库工具",
        desc:
          "云库工具专为前端开发者提供在线Flow代码转换为TypeScript声明的服务，简化开发过程，确保类型安全和代码一致性。"
      },
      {
        label: "to plain JavaScript",
        path: "/flow-to-javascript",
        title: "在线Flow转换为JavaScript工具 | 云库工具 - 代码转换高效方案",
        keywords:
          "Flow转JavaScript, Flow代码转换, JavaScript代码, 代码转换工具, 开发效率, 代码迁移, 云库工具",
        desc:
          "云库工具专为开发者提供Flow代码转换为JavaScript的在线服务，助力高效开发与流畅的代码迁移，简化开发流程。"
      }
    ]
  },
  {
    category: "Others",
    iconName: "",
    content: [
      {
        label: "XML to JSON",
        path: "/xml-to-json",
        packageName: "xml-js",
        packageUrl: "https://github.com/nashwaan/xml-js",
        title: "在线XML转JSON工具 | 云库工具 - 数据格式转换专家",
        keywords:
          "XML转JSON, 数据格式转换, 在线转换工具, 快速数据处理, 应用开发, 云库工具",
        desc:
          "云库工具提供在线XML转JSON服务，帮助开发者快速准确地进行数据格式转换，简化数据处理及应用开发流程。"
      },
      {
        label: "YAML to JSON",
        path: "/yaml-to-json",
        packageName: "yaml",
        packageUrl: "https://github.com/tj/js-yaml",
        title: "在线YAML转JSON工具 | 云库工具 - 数据格式转换首选",
        keywords:
          "YAML转JSON, 数据格式转换, 在线转换, 数据处理, 开发效率, 云库工具",
        desc:
          "借助云库工具的在线YAML转JSON服务，实现高效、准确的数据格式转换，简化数据处理和开发工作流程，提高开发效率。"
      },
      {
        label: "YAML to TOML",
        path: "/yaml-to-toml",
        title: "YAML转TOML在线工具 - 云库工具 | 高效配置文件转换解决方案",
        keywords:
          "YAML转TOML, 配置文件转换, 在线转换工具, 数据格式准确, 文件兼容性, 云库工具",
        desc:
          "云库工具提供简洁易用的YAML转TOML在线转换功能，助您无缝转换配置文件，确保数据格式准确、兼容性强。立即体验快速转换服务！"
      },
      {
        label: "Markdown to HTML",
        path: "/markdown-to-html",
        packageName: "markdown",
        packageUrl: "https://github.com/evilstreak/markdown-js",
        title: "在线Markdown转HTML工具 | 云库工具 - 轻松实现内容格式转换",
        keywords:
          "Markdown转HTML, 内容格式转换, 在线工具, 文档处理, 简化流程, 云库工具",
        desc:
          "云库工具提供高效的在线Markdown转HTML服务，帮助您轻松实现内容格式转换，无需安装任何软件，简化文档处理流程，提高工作效率。"
      },
      {
        label: "TOML to JSON",
        path: "/toml-to-json",
        packageUrl: "https://www.npmjs.com/package/@iarna/toml",
        packageName: "@iarna/toml",
        title: "在线TOML转JSON转换器 | 云库工具 - 数据格式无缝转换",
        keywords:
          "TOML转JSON, 配置文件转换, 在线转换工具, 数据格式转换, 开发工作流, 云库工具",
        desc:
          "云库工具提供在线TOML转JSON服务，支持快速准确地将TOML配置文件转换为JSON格式，简化开发流程，提高工作效率。体验流畅的数据转换服务。"
      },
      {
        label: "TOML to YAML",
        path: "/toml-to-yaml",
        title: "在线TOML转YAML工具 | 云库工具 - 配置文件无缝转换专家",
        keywords:
          "TOML转YAML, 配置文件转换, 在线转换工具, 开发效率, 项目兼容性, 云库工具",
        desc:
          "云库工具的TOML转YAML在线服务，帮您轻松实现配置文件从TOML格式到YAML格式的转换，确保数据准确无误，提升开发效率和项目兼容性。"
      },
      {
        label: "Cadence to Go",
        path: "/cadence-to-go",
        title: "Cadence转Go代码工具 | 云库工具 - 高效智能的代码转换平台",
        keywords:
          "Cadence转Go, 智能合约代码转换, 在线编程工具, Go语言开发, 代码转换器, 云库工具",
        desc:
          "云库工具的Cadence转Go在线服务，为开发者提供一流的智能代码转换功能，轻松将Cadence智能合约代码转换为Go语言代码，优化开发流程，提升开发效率。"
      }
    ]
  }
];

export interface Route {
  path: string;
  label: string;
  desc: string;
  title: string;
  keywords: string;
}

export const routes = flatten(
  categorizedRoutes.map(a =>
    // @ts-ignore
    a.content.map(x => {
      const _label =
        a.category.toLowerCase() !== "others"
          ? `在线${a.category}${x.label.replace("to ", "转换为")}`
          : x.label.replace(" to ", "转换为");

      const searchTermTmp =
        a.category.toLowerCase() !== "others"
          ? `${a.category} ${x.label}`
          : x.label;

      return {
        ...x,
        category: a.category,
        title: x.title || _label,
        searchTerm: searchTermTmp,
        keywords: x.keywords || `${_label}`,
        desc: x.desc || `${_label}`
      };
    })
  )
);

export function activeRouteData(
  pathname
): {
  label: string;
  path: string;
  searchTerm: string;
  title: string;
  desc: string;
  keywords: string;
  packageUrl?: string;
  packageName?: string;
} {
  return find(routes, o => o.path === pathname);
}
