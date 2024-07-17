import React, { useEffect, useState } from "react";
import { Typography, Flex, Card, Row, Col, Spin } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getPopularArticles } from "../../store/slices/popularArticlesSlice";
import apiService from "../../services/ApiService";
import { useNavigate } from "react-router-dom";

// Destructure components from Typography and Card
const { Title } = Typography;
const { Meta } = Card;

// Main functional component for Articles
export default function Articles() {
    const navigate = useNavigate();  // Hook to programmatically navigate

    // Create a dispatch function using useDispatch hook from redux
    const dispatch = useDispatch();

    // Get the articles state from the redux store using useSelector hook
    const articles = useSelector((state) => state.popularArticlesSlice.popularArticles);

    // useEffect hook to perform side effects in the component
    useEffect(() => {
        // Define an async function to fetch articles
        const fetchArticles = async () => {
            // Fetch most popular articles for the past 7 days using the apiService
            const data = await apiService.getMostPopularArticles(7);
            // Dispatch the fetched articles to the redux store
            dispatch(getPopularArticles(data));
        };

        // Fetch articles only if the articles array is empty
        if (!articles.length) {
            fetchArticles();
        }
    }, [articles, dispatch]); // Dependency array for useEffect

    return (
        <Row justify={"center"}>
            <Col span={20}>
                <Title data-testid="title">NY Times Most Popular Articles</Title>
                <Row gutter={16}>
                    {articles?.map((article) => (
                        <Col xl={6} lg={8} sm={12} key={article?.id} role="article">
                            <Card
                                hoverable
                                cover={<img alt="article-image" src={article?.media[0]?.['media-metadata'][2].url} />}
                                style={{
                                    marginBottom: 20,
                                }}
                                onClick={() => navigate(`/${article?.id}`)}  // Navigate to article details on click
                            >
                                <Meta data-testid="article-title" title={article.title} description={article.abstract} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
}
