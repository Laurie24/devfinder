import './../scss/Card.scss'

import moment from 'moment'
import React from 'react'

import { userDataProps } from '../type/userData'
import IconCompany from './../assets/icon-company.svg'
import IconLocation from './../assets/icon-location.svg'
import IconTwitter from './../assets/icon-twitter.svg'
import IconWebsite from './../assets/icon-website.svg'

const Card = ({ userData }: userDataProps) => {
    const sortValue = (value: string) => {
        if (value) {
            const cut = value?.slice(0, 20)
            return cut.length === 20 ? cut + '...' : cut
        }
    }

    return (
        <div className="card">
            <div className="card__avatar">
                <img alt={userData?.name} src={userData?.avatar_url} />
                <div className="card__avatar__header">
                    <h1>{userData?.name}</h1>
                    <div className="card__avatar__username">@{userData?.githubUsername}</div>
                    <p>Joined {moment(userData?.created_at).format('DD MMM YYYY')}</p>
                </div>
            </div>
            <div className="card__content">
                <div className="card__header">
                    <h1>{userData?.name}</h1>
                    <p>Joined {moment(userData?.created_at).format('DD MMM YYYY')}</p>
                </div>
                <div className="card__username">@{userData?.githubUsername}</div>
                <p className="card__bio">{userData?.bio ? userData?.bio : 'This profile has no bio'}</p>
                <div className="card__stats">
                    <div>
                        <span>Repos</span>
                        <p>{userData?.public_repos}</p>
                    </div>
                    <div>
                        <span>Followers</span>
                        <p>{userData?.followers}</p>
                    </div>
                    <div>
                        <span>Following</span>
                        <p>{userData?.following}</p>
                    </div>
                </div>

                <div className="card__contacts">
                    <div>
                        {userData?.location && (
                            <div className="card__contacts__item">
                                <img alt="" src={IconLocation} />
                                <p>{sortValue(userData?.location)}</p>
                            </div>
                        )}

                        {userData?.blog && (
                            <div className="card__contacts__item">
                                <img alt="" src={IconWebsite} />
                                <a href={userData?.blog} target="_blank" rel="noreferrer">
                                    {sortValue(userData?.blog)}
                                </a>
                            </div>
                        )}
                    </div>

                    <div>
                        {userData?.twitter_username && (
                            <div className="card__contacts__item">
                                <img alt="" src={IconTwitter} />
                                <a
                                    href={`https://twitter.com/${userData?.twitter_username}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {sortValue(userData?.twitter_username)}
                                </a>
                            </div>
                        )}
                        {userData?.company && (
                            <div className="card__contacts__item">
                                <img alt="" src={IconCompany} />
                                <p>{sortValue(userData?.company)}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
