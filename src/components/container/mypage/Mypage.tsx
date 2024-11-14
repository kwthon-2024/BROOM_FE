import { Fragment } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'

import chainImage from '@/assets/chain.svg'
import { BottomNav, ProfileImage } from '@/components/view'

const mypageArr = [
  {
    label: '내 정보',
    contents: ['계정 정보', '비밀번호 재설정'],
    urls: ['/mypage/account-info', '/mypage/password'],
  },
  {
    label: '게시글',
    contents: ['내가 올린 게시글', '북마크'],
    urls: ['/mypage/myboard', '/mypage/bookmark'],
  },
  { label: '고객 지원', contents: ['문의하기', '서비스 정보'], urls: ['/mypage', '/mypage'] },
] as const

export const Mypage = () => {
  const name = '고로케'
  const year = 3

  return (
    <div className="flex-column h-full">
      <div className="flex-column scroll">
        <div className=" flex-align relative mx-auto mb-[30px] mt-4 w-fit gap-5 rounded-[40px] border-[10px]  border-grey-2 py-[14px] pl-[18px] pr-[30px]">
          <img src={chainImage} className="absolute -left-7 bottom-5" alt="chain" />
          <ProfileImage iconType="ARMY" size="lg" />
          <div className="flex-column">
            <p className="p-medium font-medium">{name}</p>
            <p className="p-xsmall text-blue-7">예비군 {year}년차</p>
          </div>
        </div>

        <div className="flex-column mx-4 mb-6 gap-7">
          {mypageArr.map(({ label, contents, urls }, labelIndex) => (
            <Fragment key={label}>
              <section className="flex-column gap-5">
                <h6 className="font-bold text-grey-7">{label}</h6>
                <div className="flex-column gap-3">
                  {contents.map((content, contentIndex) => (
                    <Link key={content} to={urls[contentIndex]} className="p-medium text-grey-7">
                      {content}
                    </Link>
                  ))}
                </div>
              </section>
              {labelIndex !== contents.length && <hr className="bg-grey-2" />}
            </Fragment>
          ))}

          <div className="flex-align ml-auto mt-[3svh] px-1">
            <button className="p-small border-r border-r-grey-4 px-4 text-grey-6">로그아웃</button>
            <button className="p-small px-4 text-red-2">회원탈퇴</button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
