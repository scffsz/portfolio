import React, {lazy, Suspense, useEffect, useState} from 'react';

import Loading from '../../components/Loading/Loading.jsx';

import s from './Articles.module.scss';

import ArticlesSkeleton from './ArticlesSkeleton'
const Article = lazy(() => import('../../components/Article/Article'));
const Categories = lazy(() => import('../../components/UI/Categories/Categories'));
const Search = lazy(() => import('../../components/UI/Search/Search'));

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [search, setSearch] = useState('');

    const articlesList = articles.filter(post => {
        return post.title?.toLowerCase().includes(search.toLowerCase());
    }).map(post =>(<Article key={post.id} {...post} />));

    const width = window.innerWidth > 600 ? 600 : 330;
    const isArticlesExist = articlesList.length;

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://63a7f65f7989ad3286f7dd81.mockapi.io/articles?tags=${categoryId && categoryId !== 'All' ? categoryId : ''}`)
            .then((res) => res.json())
            .then((arr) => {
                setArticles(arr)
                setIsLoading(false)
            })
    }, [categoryId]);

    return (
        <>
            <div className={s.articleTop}>
                <Suspense fallback={<Loading />}>
                    <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                    <Search search={search} setSearch={setSearch} />
                </Suspense>
            </div>
            <div className={s.articleList}>
                {isLoading ? <ArticlesSkeleton width={width} />
                    : isArticlesExist ? articlesList
                        : <p className={s.notFound}>
                            No suitable articles were found
                        </p>
                }
            </div>
        </>
    );
};

export default Articles;