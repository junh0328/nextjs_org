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
- 만약 <Link href="/"> 대신 <a href="/">를 사용한다면, background color는 브라우저가 refresh 되면서 초기화될 것입니다.

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

# Basic Features

## Pages

## Data Fetching

## Built-in CSS Support

## image Optimization

## Static File Serving

## Fast Refresh

## TypeScript

## Environment Variables
