import React from 'react';
import differencePercent from '../hooks/differencePercent';

const Header = ({daytotal, yesterdaytotal, weektotal}) => {
    let percent = differencePercent(yesterdaytotal, daytotal);

    return (
        <header>
                <div className="title">
                    <div className="indecator gray">Показатель</div>
                    <div className="indecator blue">Текущий день</div>
                    <div className="indecator gray">Вчера</div>
                    <div className="indecator gray">За неделю</div>
                </div>
                <div className="subtitle">
                    <div className="indecator-left gray">Выручка, руб</div>
                    <div className="indecator blue">{daytotal}</div>
                    {percent < 0 ? (
                        <div className="indecator red">
                            {yesterdaytotal} <span>{percent}%</span>
                        </div>
                    ) : (
                        <div className="indecator green">
                            {yesterdaytotal} <span>{percent}%</span>
                        </div>
                    )}
                    <div className="indecator gray">{weektotal}</div>
                </div>
            </header>
    );
};

export default Header;