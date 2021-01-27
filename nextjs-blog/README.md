# 🖥 Create a Next.js App

⌨️ Setup

```
npx create-next-app 프로젝트이름(nextjs-blog)
```

- npx 명령어를 통해 next 프레임워크를 다운로드합니다.

```
cd nextjs-blog

...

next run dev
```

- package.json에 자동으로 만들어진 dev 스크립트를 통해 next 개발 모드를 실행합니다.
- next는 기본적으로 SSR을 지원하기 위해 만들어진 프레임워크입니다.
- pages 폴더가 라우팅 기능을 하기 때문에 기존 리액트에서

```js
<Route path="/something" components={something} />
```

와 같은 형식으로 컴포넌트를 지정해주지 않아도 넥스트 라우터에 의해 라우팅됩니다.

- 넥스트 개발 서버는 빠른 리프레쉬가 가능합니다. 파일을 변화할 떄, 넥스트는 자동적으로 거의 즉시 브라우저에 변화를 적용합니다.
  새로 고침(Refresh)이 필요하지 않습니다.

# 🖥 Naviagate Between Pages

- 우리가 만든 nextjs 앱에는 초기에 한 개의 페이지밖에 존재하지 않습니다. 웹사이트들과 웹 어플리케이션들을 일반적으로 많은 페이지들을 가지고 있습니다.
- 이번 챕터에서는 integrated(통합된) file system routing을 사용하여 새로운 페이지를 만듭니다.
- 'Link' 컴포넌트를 사용하여 클라이언트 사이드 네비게이션을 만듭니다.
- 넥스트에서 지원하는 코드 스플리팅과 프리페칭에 대해 배웁니다.
<hr/>
- nextjs에서 페이지는 'pages' 디렉토리 안에 파일에 의해 exported된 리액트 컴포넌트입니다.

```
- `pages/index.js`는 '/' route 와 연관되어 있습니다.
- `pages/posts/first-post.js`는 '/posts/first-post' route와 연결되어 있습니다.
```

- 우리는 이미 pages 디렉토리를 가지고 있기 때문에 post/first-post.js를 안에 만들고 확인해봅니다.

<img width="400" alt="스크린샷 2021-01-27 오후 2 16 22" src="https://user-images.githubusercontentcom/
54658162/105946380-8232b480-60aa-11eb-9c76-df1ed4087395.png">

- 주소(localhost:3000/posts/first-post)에 따라 우리가 만든 함수가 렌더링된 것을 볼 수 있습니다.

<hr/>

⌨️ Link Component

- 두 페이지를 연결(linking)하기 위해서는 `<a>`HTML tag를 사용합니다.
- nextjs에서 우리는 `Link` 컴포넌트를 `next/link`로 부터 제공받아 `<a>` 태그로 감싸 사용합니다.
- 이 링크 컴포넌트는 어플리케이션에서 다른페이지로의 클라이언트 사이드 네비게이션을 가능하도록 합니다.

```js
<h1 className={styles.title}>
  Read{' '}
  <Link href="/post/first-post">
    <a>this page!</a>
  </Link>
</h1>
```

```js
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
```

- index 페이지와 first-post 페이지에 다음과 같은 코드를 추가합니다.
- 결과를 확인해봅니다.

<hr/>

⌨️ Client-Side Navigation

- Link 컴포넌트는 두 페이지에서 같은 동작을하는 클라이언트-사이드 네비게이션을 가능하도록합니다.
- 클라이언트-사이드 네비게이션이란 브라우저에 의해 적용되는 기본값 네비게이션이 아닌, 자바스크립트를 사용하여 페이지를 더 빠르게 변화시키는 것을 의미합니다.

- 이를 확인할 수 있는 간단한 방법은 다음과 같습니다.
<ul>
  <li> 브라우저의 개발자 도구를 사용하여 `background` CSS 속성 `<html>`을 `yellow` </li>
  <li> 링크를 클릭하면 두 페이지 사이를 오갈 수 있습니다.</li>
  <li> 페이지 전환 사이에 노란색 배경이 지속되는 것을 볼 수 있습니다.</li>
</ul>
- 이는 브라우저가 전체 페이지를 로드하지 않고 클라이언트 사이드 네비게이션이 작동하고 있음을 나타냅니다.
- 만약 Link href="/" 대신 a href="/" 를 사용한다면, background color는 브라우저가 refresh 되면서 초기화될 것입니다.

<hr/>

⌨️ Code splitting and prefetching

- nextjs는 코드 스플리팅을 자동적으로 하기 때문에, 각 페이지들은 사용자의 요구(필요)에 의해 로드됩니다.
- 이것은 홈페이지(index)가 렌더링되더라도, 다른 페이지의 코드들은 초기에 렌더링되지 않는다는 것을 말합니다.
- 이 nextjs의 기능은 개발자가 수백개의 페이지를 만들어 제공하더라도, 페이지를 신속히 로딩할 것을 보장합니다.

- 사용자가 요청한 페이지의 코드만이 로딩된다는 것은 페이지들이 고립될 수 있음을 의미합니다.
- 만약 특정 페이지에서 에러가 발생하더라도, 나머지 어플리케이션은 계속 작동할 것 입니다.

Summary

```
Note
- 만약 nextjs앱 외부에서 페이지에 링크를 주기 위해서는 <Link> 태그 없이 <a> 태그만 사용하면 됩니다.
- 만약 className과 같은 속성을 주고 싶으면 <Link>태그가 아닌, <a>태그 내부에 속성으로 className을 주면 됩니다.
```

# 🖥 Assets, Metadata, and CSS

- 이전 챕터까지는 styling이 없었기 때문에 지금부터 CSS 코드를 작성하여 페이지를 스타일링합니다.
- nextjs는 CSS와 Sass를 지원합니다.
- 이번 챕터에서는 nextjs가 다루는 고정적인 파일 (images, title 태그와 같은 page metadata)들에 대해 어떻게 다루는지 알 수 있습니다.

<hr/>

⌨️ Assets

- 시작으로는 images와 같은 정적인 파일들을 nextjs가 어떻게 다루는 지 이야기해봅시다.
- nextjs는 images와 같은 정적인 파일들을 public 디렉토리를 통해 제공합니다.
- 'public' 폴더 안에 들어있는 파일들은 'pages'와 유사하게 애플리케이션의 초기 값으로 참조(referenced)됩니다.

- pages/index 파일에 들어있는 favicon을 예로 들어봅시다.

```js
<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
```

- vercel 이미지는 어플리케이션의 최상위 계층의 public 디렉토리에 존재합니다.
- 따로 '/public' 이라는 경로를 설정하지 않아도 됩니다.

<hr/>

⌨️ Metadata

- 우리가 `<title>` 과 같은 페이지의 메타 데이터 테그를 확인하고 싶으면 어떻게 해야 할까?
- `<title>` 태그는 `<head>` 태그의 일부이므로, 우리는 nextjs 페이지에서 `<head>` 태그를 통해 이 메타 데이터를 관리합니다.

```
import Head from 'next/head'
```

- 해당 명령어를 통해 nextjs에서 제공하는 Head 컴포넌트 모듈을 import 시킵니다.

```js
import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
```

- `<Head>` 컴포넌트를 사용하여 해당 페이지의 타이틀을 넣어줄 수 있습니다.

<hr/>

⌨️ Layout Component

- 모든 페이지를 가로질러 공유할 수 있는 Layout 컴포넌트를 만들어 보자
- components라고 불리는 디렉토리를 만듭니다.
- 안에는 layout.js를 생성합니다.

```js
import styles from './layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
```

- 후에 우리가 만든 first-post.js를 Layout 컴포넌트로 감싸줍니다.
- Layout 컴포넌트 사이에 들어있는 코드를 children으로 받아와 styles안에 들어있는 container 속성을 적용시킵니다.

```js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
```

- 우리는 Layout 컴포넌트에 몇가지 스타일들을 추가할 것입니다.
- 그렇기 위해 우리는 리액트 컴포넌트에 CSS 파일들을 import 시킬 수 있도록 CSS Modules를 사용합니다.

```
Important: To use CSS Modules, the CSS file name must end with .module.css.
```

```js
✔️<div id= "__next">
  ✔️<div class="layout_container__2t4v2">
```

- CSS Modules를 사용하는 이유는 CSS Modules이 자동적으로 유니크한(중복이 없는) class names를 만들어주기 때문입니다.
- 몇개의 CSS 모듈을 사용하던지 간에, class name의 중복을 걱정할 필요가 없습니다.
- 게다가 nextjs의 코드 스플리팅의 특징은 CSS Modules에서 가장 잘 작동합니다.
- CSS Modules는 각페이지에서 적용되는 가장적은 CSS의 양(amount)을 장담합니다.

- 🌟CSS Modules는 빌드시에 자바스크립트 번들에서 추출될 수 있고, nextjs에 의해 자동적으로 css 파일이 로딩되도록 generate 합니다.🌟

<hr/>

⌨️ Global Styles

- 만약 모든 페이지(pages)에 CSS가 로딩된 상태이기를 원한다면 global CSS 파일을 사용해야합니다.
- pages 폴더 안에 `_app.js` 파일이 글로벌 스타일을 적용할 수 있는 파일입니다.

```js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

- nextjs에서, 너는 글로벌 CSS 파일을 `pages/_app.js`를 import 시켜 사용할 수 있습니다.
- 하지만, 모든 곳에서 global CSS를 import할 수 있는 것은 아닙니다.
- 왜냐하면 global CSS는 모든 페이지의 모든 요소에 영향을 줄 수 있기 때문입니다. (의도와 상관없이 모든 페이지에서 적용될 수 있음)
- 만약, 너가 `post/first-post` 페이지로 가기 위해 홈페이지에서 navigate를 사용할 때, 홈페이지의 global styles가 `/posts/first-post`페이지에 의도치 않게 영향을 줄 수 있기 때문입니다.

<hr/>

⌨️ Polishing Layout

⌨️ Styling Tips
