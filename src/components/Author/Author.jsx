import React from 'react';

import s from './Author.module.scss';
import {UserCircleIcon} from "@heroicons/react/24/outline/index.js";

/**
 * @param {string} authorLogo
 * @param {string} author
*/

const Author = ({authorLogo, author}) => (
    <div className={s.author}>
        <span className={s.authorName}>{author || 'Аноним'}</span>
        {authorLogo ?
            <img className={s.authorLogo}
                 src={authorLogo}
                 alt='author-logo'
            />
            : <UserCircleIcon size='2em' />
        }
    </div>
);

export default Author;