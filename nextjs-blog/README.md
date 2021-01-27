# Create a Next.js App

```
npx create-next-app 프로젝트이름(nextjs-blog)
```

npx 명령어를 통해 next 프레임워크를 다운로드합니다.

```
cd nextjs-blog

...

next run dev
```

package.json에 자동으로 만들어진 dev 스크립트를 통해 next 개발 모드를 실행합니다.
next는 기본적으로 SSR을 지원하기 위해 만들어진 프레임워크입니다.
pages 폴더가 라우팅 기능을 하기 때문에 기존 리액트에서

```js
<Route path="/something" components={something} />
```

와 같은 형식으로 컴포넌트를 지정해주지 않아도 넥스트 라우터에 의해 라우팅됩니다.

넥스트 개발 서버는 빠른 리프레쉬가 가능합니다. 파일을 변화할 떄, 넥스트는 자동적으로 거의 즉시 브라우저에 변화를 적용합니다.
새로 고침(Refresh)이 필요하지 않습니다.

# Naviagate Between Pages

# Basic Features

## Pages

## Data Fetching

## Built-in CSS Support

## image Optimization

## Static File Serving

## Fast Refresh

## TypeScript

## Environment Variables
