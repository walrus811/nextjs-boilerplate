# Next.js 보일러플레이트 프로젝트

# 의존성 관리

## outdated

- eslint(8.57.1): 커뮤니티 의견으론 9버전이 현재 굉장히 불안정함.

- headlessui(2.2.0): 내부의 `@tanstack/react-virtual`의 피어 의존성을 만족하지 못함. 향후 해결 될 것으로 생각됨. 문제가 있어도 가상화를 쓰는 컴포넌트를 안 쓰면 됨.

```bash
 WARN  Issues with peer dependencies found
.
└─┬ nextjs-boilerplate 0.1.0
  └─┬ @headlessui/react 2.2.0
    └─┬ @tanstack/react-virtual 3.10.8
      ├── ✕ unmet peer react@"^16.8.0 || ^17.0.0 || ^18.0.0": found 19.0.0-rc-02c0e824-20241028
      └── ✕ unmet peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0": found 19.0.0-rc-02c0e824-20241028

```
